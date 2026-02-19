import './App.css'
import Cards from './components/Cards'

const App = () => {

  const jobs = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    companyName: "Apple",
    datePosted: "5 days ago",
    post: "Senior UI Engineer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "UX Designer",
    tag1: "Part-Time",
    tag2: "Mid Level",
    pay: "$70/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg",
    companyName: "Meta",
    datePosted: "3 days ago",
    post: "Product Designer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    companyName: "Netflix",
    datePosted: "10 days ago",
    post: "Frontend Developer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    companyName: "Google",
    datePosted: "1 week ago",
    post: "Graphic Designer",
    tag1: "Full-Time",
    tag2: "Junior Level",
    pay: "$65/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    companyName: "Microsoft",
    datePosted: "4 weeks ago",
    post: "UI/UX Researcher",
    tag1: "Full-Time",
    tag2: "Mid Level",
    pay: "$85/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg",
    companyName: "Adobe",
    datePosted: "6 days ago",
    post: "Visual Designer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Kochi, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg",
    companyName: "Tesla",
    datePosted: "8 days ago",
    post: "Product UI Engineer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$130/hr",
    location: "Ahmedabad, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
    companyName: "Uber",
    datePosted: "2 days ago",
    post: "Interaction Designer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$75/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
    companyName: "Airbnb",
    datePosted: "3 weeks ago",
    post: "Junior UI Designer",
    tag1: "Full-Time",
    tag2: "Junior Level",
    pay: "$60/hr",
    location: "Goa, India"
  }
];


  return(jobs.map(function(elem){
  
    return <Cards 
    company = {elem.companyName}
    logo = {elem.brandLogo}
    date = {elem.datePosted}
    post = {elem.post}
    tag1 = {elem.tag1}
    tag2 = {elem.tag2}
    pay = {elem.pay}
    location = {elem.location}
    />
  }))
  
}

export default App