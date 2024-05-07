// pages/posts/[slug].js

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Card, CardContent, Typography } from "@mui/material";

export default function Post() {
  const router = useRouter();
  const { slug } = router.query;
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    if (slug) {
    
      fetchPostData(slug);
    }
  }, []);

  const fetchPostData = async (slug) => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${slug}`
      );
      setPostData(response.data);
    } catch (error) {
      console.error("Error fetching post data:", error);
    }
  };

  if (!postData) {
    return <div>Loading...</div>;
  }
  //    console.log(postData)
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
    <Card sx={{ minWidth: 20 }}>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          {postData.id}
        </Typography>
      
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {postData.title}
        </Typography>
        <Typography variant="body2">
          {postData.body}
        </Typography>
      </CardContent>
    </Card>
  </div>
  );
}
