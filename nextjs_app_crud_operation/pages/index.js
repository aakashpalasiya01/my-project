import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  const handleClick = (postId) => {
    router.push(`/posts/${postId}`);
  };
  const handleDelete = (postId) => {
      let response= axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  };
  const [posts, setPosts] = useState([]);
  useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts').then(function(response) {
        setPosts(response.data);

      }).catch(function(error) {
          console.log(error);
      });
  }, [])
  console.log('Data:', posts);
  return (
    <>
      <Box marginTop={20} paddingX={20}>
        <Stack>
          <Typography textAlign={"center"} variant="h4">
            User Posts
          </Typography>
        </Stack>
        {posts.length ? (
          <>
            {" "}
            <TableContainer sx={{ marginTop: 5 }} component={Paper}>
              <Table sx={{ minWidth: 950 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">ID</TableCell>
                    <TableCell align="center">POST TITLE</TableCell>
                    <TableCell align="center">POST DETAIL</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {posts
                    ?.filter((a) => a.id <= 20)
                    .map((post) => (
                      <TableRow
                        key={post.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="center">{post.id}</TableCell>

                        <TableCell align="center">{post.title}</TableCell>

                        <TableCell align="justify">
                          <Button sx={{marginRight:5}}
                            onClick={() => {
                              handleClick(post.id);
                            }}
                            color="primary"
                            variant="contained"
                            size="medium"
                          >
                            VIEW DETAIL
                          </Button>
                          <Button
                            onClick={() => {
                              handleDelete(post.id);
                            }}
                            color="primary"
                            variant="contained"
                            size="medium"
                          >
                            DELETE
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        ) : null}
      </Box>
    </>
  );
}
