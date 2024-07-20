import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Expe from "../../assets/Experience.png";

const Experience = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date("2024-07-25T17:00") - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        timerComponents.push(
            <span key={interval} style={{
                width: "62px",
                height: "62px",
                borderRadius: "50%",
                background: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#000",
                textAlign: "center",
                flexDirection: "column"
            }}>
                <span style={{
                    fontSize: "14px",
                    fontWeight: "500"
                }}>{timeLeft[interval]}</span>
                <span style={{
                    fontSize: "12px",
                    fontWeight: "300"
                }}>{interval.charAt(0).toUpperCase() + interval.slice(1)}</span>
            </span>
        );
    });

    return (
        <Container>
            <div style={{
                background: "#000",
                width: "100%",
                padding: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap:"wrap"
            }}>
                <div>
                    <b style={{
                        color: "rgba(0, 255, 102, 1)",
                        fontSize: "16px",
                        fontWeight: "600"
                    }}>Categories</b>
                    <h2 style={{
                        color: "#fff",
                        fontSize: "46px",
                        fontWeight: "900"
                    }}>Enhance Your <br /> Music Experience</h2>
                    <div className="tame" style={{
                        display: "flex",
                        gap: "10px",
                        margin: "10px 0"
                    }}>
                        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
                    </div>
                    {/* <button style={{
                        marginTop:"40px",
                        padding: "10px 35px",
                        color: "#fff",
                        background: "rgba(0, 255, 102, 1)",
                        fontSize: "16px",
                        fontWeight: "600"
                    }}>Buy Now!</button> */}
                </div>
                <img src={Expe} alt="Experience" />
            </div>
        </Container>
    );
};

export default Experience;
