import React from 'react'
import Cards from './components/cards'

function App() {
  return (
    <div className="cards-wrapper">
      <Cards
        name= "John Doe"
        img= "https://images.unsplash.com/photo-1771258052747-52e19364185f?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        bio= "Professional driver with 5+ years of experience in city and outstation rides."
       />
      <Cards
        name = "Jane Smith"
        img = "https://media.istockphoto.com/id/1474164559/photo/pleased-corporate-worker-posing-for-camera-inside-office-building.jpg?s=1024x1024&w=is&k=20&c=S0f3gkfZIqUfvNljMv9VIz20rx3sCDtH3sJvCBYmeQQ="
        bio = "Experienced delivery driver with a focus on punctuality and safety."
       />
      <Cards 
        name= "Michael Johnson"
        img= "https://media.istockphoto.com/id/1439796197/photo/man-in-yellow-jacket-in-building-hallway.jpg?s=1024x1024&w=is&k=20&c=hE2A8WWMEj-SFJONI9_gBv2Pm-RUeIun3d-l7Fr9N0M="
        bio= "Reliable taxi driver with a passion for customer service."
       />
      <Cards 
        name= "Sarah Williams"
        img= "https://media.istockphoto.com/id/1330904025/photo/rearview-shot-of-a-young-businessman-talking-on-a-cellphone-in-an-empty-boardroom.jpg?s=1024x1024&w=is&k=20&c=lUvrpTwrVU-cPSD5SKSSsAoVMAjGrUMManqbjAwIwnA="
        bio= "Skilled ride-sharing driver with a clean vehicle and friendly demeanor."
       />
      <Cards
        name= "David Brown"
        img= "https://media.istockphoto.com/id/1474164561/photo/depressed-company-employee-standing-alone-in-dark-office-corridor.jpg?s=1024x1024&w=is&k=20&c=RZt0szeaGTxFUMeAvUi21D_DuhUvGVXHVh2KVvUsdSU="
        bio= "Seasoned professional driver with expertise in navigating traffic."
      />
    </div>
  )
}

export default App
