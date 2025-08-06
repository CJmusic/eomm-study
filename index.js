const { API } = require('mrivals');

async function getPlayerStats() {
    try {
        // Fetch user data
        const user = await API.fetchUser('Ducks Inc');
        
        // Get basic user info
        console.log('👤 User Info:', user.info());
        /*
        Output: User and MMR information
        */
        
        // Get overview stats
        console.log('📊 Overview:', user.overview());
        /*
        Output: General gameplay statistics
        */
        
        // Get hero stats
        console.log('🦸‍♂️ Heroes:', user.heroes());
        /*
        Output: Hero-specific performance data
        */
        
        // Get role stats
        console.log('🎭 Roles:', user.roles());
        /*
        Output: Role-based statistics
        */
        
        // Get peak rank
        console.log('🏆 Peak Rank:', user.peakRank());
        /*
        Output: Highest achieved rank
        */
        
        // Get raw data
        console.log('📋 Raw Data:', user.raw());
        /*
        Output: Complete unprocessed response
        */
        
    } catch (error) {
        console.error('❌ Error:', error.message);
        // Example: "We could not find the player [player]."
    }
}

// Run the example
getPlayerStats();