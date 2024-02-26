// import { Container,Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DateRangeIcon from '@mui/icons-material/DateRange';
import {Box, Container, Icon, IconButton, Paper, Typography, useTheme  } from '@mui/material'
import PostCard from '../components/PostsCard';
function Home() {

  const [ data, setData] = useState([]);
  const [ loading, setLoading] = useState(false);



const fetchData = async ()=>{

  const api = axios.create({
    baseURL: " https://www.lawctopus.com/wp-json/wp/v2",
    withCredentials: true,
  });
 
   
try {
  setLoading(true);
  const response = await api.get(`/posts`);
  if( response.data){
    setLoading(false);
    setData(response.data);
  }
} catch (error) {
  setLoading(false);
  console.log(error.message);
  
}

//     await fetch("https://www.lawctopus.com/wp-json/wp/v2/posts" ,{
//       method: "GET", // *GET, POST, PUT, DELETE, etc.
//     // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: "same-origin", // include, *same-origin, omit
  
  
//     }).then((data) => data?.json()).then((response) => {
//     if(response){
//     setData(response);
//       setLoading(false)
//     }
   
// }).catch((error) => {
//   setLoading(false);
//   console.log(error)
// });
}

useEffect(   () =>{
 fetchData();
},[])

  return (
  <Container maxWidth="md" >
  <PostCard  posts={data} loading={loading}/>
    {/* <Box sx={{backgroundColor:"#191919" ,padding: "20px" ,margin:"60px 0" ,borderRadius:"20px"}} >
      <Typography  fontFamily="Monda"  variant="h5" color="#ffffff" gutterBottom>
      Panel Discussion on Women&#8217;s Rights and Relationship Trends in India by Global Policy Pen in Collaboration with Manovichaar [Online; Feb 24; 6-7 Pm]: Register Now!
      </Typography>

      <Typography variant="p"  component="p" color={"gray"} >
       <Box sx={{display:"flex" ,gap:1 ,justifyContent:"flex-end"}} >
  <div style={{fontSize:"11px" ,fontWeight:"400"}} >
              <IconButton
                size={"small"}
                color="inherit"
              >
                <AccountCircleIcon/>
              </IconButton> 
              Gurjit
  </div>
<div style={{fontSize:"11px" ,fontWeight:"400"}} >
            <IconButton
              size="small"
              color="inherit"
            >
              <DateRangeIcon/>
            </IconButton>
            February 19, 2024
</div>
       </Box>
      </Typography>

      <Typography variant="p" fontSize={"1em"} margin={"20px 0"} lineHeight={"25px"} color={"gray"} component="p">
      <p  ><strong><em>Global Policy Pen in Collaboration with Manovichaar is organising Panel Discussion on Women’s Rights and Relationship Trends in India on February 24.</em></strong></p>
      </Typography>
      
      <Typography  fontFamily="Monda"  variant="h5" color="#ffffff" gutterBottom>
    About The Organisation
      </Typography>
      
      <Typography variant="p" fontSize={"1em"} margin={"20px 0"} lineHeight={"25px"} color={"#fff"} component="p">
      <p  ><strong>Global Policy Pen in Collaboration with Manovichaar is organising Panel Discussion on Women’s Rights and Relationship Trends in India on February 24.</strong></p>
      </Typography>

      <Typography variant="p" fontSize={"1em"} margin={"20px 0"} lineHeight={"25px"} color={"#fff"} component="p">
      <p  ><strong>Global Policy Pen: A youth-led research organization.</strong></p>
      </Typography>

      <Typography variant="p" fontSize={"1em"} margin={"20px 0"} lineHeight={"25px"} color={"#fff"} component="p">
      <p  ><strong>Manovichaar: A platform for students to engage in discussions about mental health in various cultural and socio-political contexts.</strong></p>
      </Typography>

      <Typography  fontFamily="Monda"  variant="h5" color="#ffffff" gutterBottom>
   EVENT DETAILS
      </Typography>

      <ul style={{color:"#FFF" ,fontSize:"1em", margin:"20px 0 20px 50px " ,}}>
      <li>Dates: 24th February.</li>
      <li>Time: 6 PM – 7 PM IST.</li>
      <li>Format: Online Panel Discussion. Link to be provided on the day of the registration via mail.</li>
      <li>Certificate: All participants will be given a certificate upon attending the panel discussion.</li>
      </ul>

      <Typography  fontFamily="Monda"  variant="h5"  margin={"20px 0"} color="#ffffff" gutterBottom>
     Elegibility
      </Typography>
      <Typography variant="p" fontSize={"1em"} margin={"20px 0"} lineHeight={"25px"} color={"#fff"} component="p">
      <p  ><strong>Open to all 5 and 3-year law students.</strong></p>
      </Typography>

      <Typography  fontFamily="Monda"  variant="h5"  margin={"20px 0"} color="#ffffff" gutterBottom>
     Panelists
      </Typography>
      <Typography variant="p" fontSize={"1em"} margin={"20px 0"} lineHeight={"25px"} color={"#fff"} component="p">
      <p  ><strong>Ms. Kartika Sharma <em>(RCI Registered Clinical Psychologist)</em></strong></p>
      </Typography>
      <Typography variant="p" fontSize={"1em"} margin={"20px 0"} lineHeight={"25px"} color={"#fff"} component="p">
      <p><strong>Kartika Sharma is a distinguished clinical psychologist devoted to facilitating the holistic development of her clients. Grounded in a philosophy that recognises the interconnectedness of mental, emotional, and physical health, Kartika is committed to tailoring her therapeutic interventions to meet the individual needs of each person under her care.</strong></p>
      </Typography>
      <Typography variant="p" fontSize={"1em"} margin={"20px 0"} lineHeight={"25px"} color={"#fff"} component="p">
      <p><strong>Beyond her clinical practice, Kartika actively engages in social work, channelling her expertise to contribute positively to the community. Whether through volunteering efforts or advocacy for mental health awareness, she strives to make a meaningful impact on the broader societal well-being.</strong></p>
      </Typography>
      <Typography variant="p" fontSize={"1em"} margin={"20px 0"} lineHeight={"25px"} color={"#fff"} component="p">
      <p><strong>Dr. Geeta K. Kubsad <em> (Assistant Professor)</em></strong></p>
      </Typography>
      <Typography variant="p" fontSize={"1em"} margin={"20px 0"} lineHeight={"25px"} color={"#fff"} component="p">
      <p><strong>Ph.D. (BV, Pune), B.Com.; LL.B.; LL.M. (Mumbai), P.G. Diploma in Medical Law & Ethics (NLSIU), M.A. (Philosophy), (Univ. of Mumbai). </strong></p>
      </Typography>
      <Typography variant="p" fontSize={"1em"} margin={"20px 0"} lineHeight={"25px"} color={"#fff"} component="p">
      <p><strong>Dr. Madhu Vamsi <em>(Psychiatrist, Serial Entrepreneur)</em></strong></p>
      </Typography>

      <Typography variant="p" fontSize={"1em"} margin={"20px 0"} lineHeight={"25px"} color={"#fff"} component="p">
      10+ Entrepreneurial Endeavours<br />
      20+ Publications<br />
      400+ Mental Awareness Collabs & Quizzes Conducted<br />
      4000+ Joyful Patients<br />
      40000+ Hours of Psychiatry Prowess<br />
      400000+ Hours of Medicine Mastery<br />
      </Typography>

      <Typography  fontFamily="Monda"  variant="h5"  margin={"20px 0"} color="#ffffff" gutterBottom>
      How to Register?
      </Typography>
      <Typography variant="p" fontSize={"1em"} margin={"20px 0"} lineHeight={"25px"} color={"#fff"} component="p">
      <p><strong>Interested candidates can register via the link given at the end of the post.</strong></p>
      </Typography>

      <Typography  fontFamily="Monda"  variant="h5"  margin={"20px 0"} color="#ffffff" gutterBottom>
      Fee
      </Typography>
      <Typography variant="p" fontSize={"1em"} margin={"20px 0"} lineHeight={"25px"} color={"#fff"} component="p">
      <p><strong>No Fee.</strong></p>
      </Typography>

      <Typography  fontFamily="Monda"  variant="h5"  margin={"20px 0"} color="#ffffff" gutterBottom>
      Deadline
      </Typography>
      <Typography variant="p" fontSize={"1em"} margin={"20px 0"} lineHeight={"25px"} color={"#fff"} component="p">
      <p><strong>24th February, 4 PM.</strong></p>
      </Typography>

      <Typography  fontFamily="Monda"  variant="h5"  margin={"20px 0"} color="#ffffff" gutterBottom>
      Contact
      </Typography>
      <Typography variant="p" fontSize={"1em"} margin={"20px 0"} lineHeight={"25px"} color={"#fff"} component="p">
      <p><strong>Phone: +91 98332 42940 <br />
Email: globalpolicypen@gmail.com</strong></p>
      </Typography>

      <h3 className="wp-block-heading has-text-align-center" id="h-click-here-to-register"><a href="https://docs.google.com/forms/d/e/1FAIpQLSe0qVkOZ93y3KZ27ywpq1YFTrAVZme9zTDLdKdVqiU-8G90dQ/viewform?usp=sf_link" target="_blank" rel="noreferrer noopener" data-wpel-link="external"><strong>Click here to register.</strong></a></h3>
<Box sx={{display:"flex" , alignItems:"center" ,justifyContent:"center" ,marginTop:"20px"}}>

     <img fetchpriority="high" decoding="async" style={{width:"80%"}} src="https://www.lawctopus.com/wp-content/uploads/2024/02/panel-discussion-.png" alt=""   />
</Box>
      
    </Box> */}
  </Container>
  )
}

export default Home
