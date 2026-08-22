import React from 'react'

function PropComp ({Status}) {
    const styles = {
        success: {
            color: "green",
            backgroundColor: "#f8d7da",
            padding: "10px",
            
        },
        error: {
            color: "red",
            backgroundColor: "#f8d7da",
            padding: "10px",
        },
        warning: {
            color: "orange",
            backgroundColor: "#f8d7da",
            padding: "10px"
        }, 
    };
    return (
        <div style={styles[Status]}>
            Status: {Status}
        </div>
    )
}

export default PropComp;
