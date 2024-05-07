'user client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button, Container, Table } from "react-bootstrap";
interface UserData {
  name: string;
  dateOfBirth: string; 
  gender: string; 
  mobileNumber: string; 
  address: string;
  city: string;
  
}

export default function Home() {
const [search ,setSearch]=useState<string>('')
  const router=useRouter();
const [userdata, setUserData] = useState<UserData[]>([]);

useEffect(() => {
  const usersString = localStorage.getItem('DATA');
  if (usersString) {
    const users: UserData[] = JSON.parse(usersString);
    setUserData(users);
  }
}, []);
  const handleNavigate=()=>{
    router.push('/user')
  }

  return (
    <>
       <Container className='container-fluid mx-4  my-2 '>
        <div className='row d-flex  flex-column '>
            <div className='row d-flex  justify-content-between align-content-center '>
                <input type='search' onChange={(e)=>{setSearch(e.target.value)}}/>
               <Button onClick={handleNavigate} type='button'>ADD USER</Button>
            </div>
         <div><Table striped bordered hover>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Date Of Birth</th>
          <th>Gender</th>
          <th>Mobile</th>
          <th>Address</th>
          <th>City</th>

        </tr>
      </thead>
      <tbody>
         {userdata.length>0 && userdata.map((user,index)=>(
            <tr key={user?.id}>
            <td>{index +1}</td>
            <td>{userdata?.name}</td>
            <td>{userdata?.dateOfBirth}</td>
            <td>{userdata?.gender}</td>
            <td>{userdata?.mobileNumber}</td>
            <td>{userdata?.address}</td>
            <td>{userdata?.city}</td>
            
          </tr>
         ))}
        
      </tbody>
    </Table></div>
        </div>
       </Container>
    </>
  );
}
