
import './App.css';
import Card from './component/Card';
const App = () => {

 const jobOpenings = [
  {
    brandLogo: "https://cdn.simpleicons.org/google",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$82/hr",
    location: "Mountain View, USA"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/meta",
    companyName: "Meta",
    datePosted: "2 weeks ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hr",
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amazon.svg",
    companyName: "Amazon",
    datePosted: "10 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/apple",
    companyName: "Apple",
    datePosted: "3 weeks ago",
    post: "iOS Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/netflix",
    companyName: "Netflix",
    datePosted: "1 week ago",
    post: "Data Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoft.svg",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$78/hr",
    location: "Redmond, USA"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/tesla",
    companyName: "Tesla",
    datePosted: "6 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$88/hr",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://logo.svgcdn.com/logos/openai.png",
    companyName: "OpenAI",
    datePosted: "10 weeks ago",
    post: "Research Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "San Francisco, USA"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/nvidia",
    companyName: "NVIDIA",
    datePosted: "8 days ago",
    post: "GPU Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$85/hr",
    location: "Santa Clara, USA"
  },
  {
    brandLogo:"https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/adobe.svg",
    companyName: "Adobe",
    datePosted: "2 weeks ago",
    post: "UX Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "San Jose, USA"
  }
];


  return (
    <div className="parent">
    {
       jobOpenings.map(
        (elem,idx)=>{
         return <>
        <div key={idx}>
        <Card
         brandLogo={elem.brandLogo}
         datePosted={elem.datePosted}
         post={elem.post}
         tag1={elem.tag1}
         tag2={elem.tag2}
         pay={elem.pay}
         companyName={elem.companyName}
         />
        </div>

     </>
        }
        )
    }
    </div>
  )
}

export default App