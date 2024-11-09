// src/App.jsx
import React from 'react'; // Import React
import Header from './components/Header'; // Import Header component
import MainContent from './components/MainContent'; // Import MainContent component
import Footer from './components/Footer'; // Import Footer component
import UserProfile from './components/UserProfile'; // Import UserProfile component
import Counter from './components/Counter'; // Import the Counter component

function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <UserProfile 
                name="Alice" 
                age="25" 
                bio="Loves hiking and photography" 
            />
            <Counter />
            <Footer />
        </div>
    );
}

export default App;
