import React from 'react';
import WelcomeMessage from './components/WelcomeMessage'; // This line imports the WelcomeMessage component

function App() {
    return (
        <div>
            <WelcomeMessage /> {/*this line renders the WelcomeMessage component*/}
            {/*other components/content go here*/}
        </div>
    );
}

export default App;
