import React from "react";

function Rating({ rate }) {
    // #21ce79
    // #c8cb2f
    return (
        <>
            <div
                className="position-absolute"
                style={{ top: "-40px", left: "15px" }}
            >
                <div
                    className="circle-rating d-flex justify-content-center align-items-center mx-auto"
                    style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        background: `conic-gradient(${
                            rate * 10 >= 70 ? "#21ce79" : "#ffc107"
                        } ${
                            // percentage * 3.6
                            rate * 10 * 3.6
                        }deg, #e9ecef 0deg)`,
                    }}
                >
                    <span
                        className="text-dark d-flex align-items-center justify-content-center text-bg-dark text-white rounded-circle fs-4 fw-bold"
                        style={{
                            width: "40px",
                            height: "40px",
                            // backgroundColor: "red",
                        }}
                    >
                        {rate * 10}
                        <span
                            className="position-absolute "
                            style={{
                                right: "10px",
                                top: "10px",
                                fontSize: "8px",
                            }}
                        >
                            %
                        </span>
                    </span>
                </div>
            </div>
        </>
    );
}

export default Rating;
