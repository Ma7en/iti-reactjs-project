import React from "react";

// font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCrack } from "@fortawesome/free-solid-svg-icons";

// bootstrap
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function NoWatch() {
    const navigate = useNavigate();

    return (
        <>
            <div
                className="d-flex align-items-center justify-content-center flex-column gap-3"
                style={{ minHeight: "80vh" }}
            >
                <div>
                    <FontAwesomeIcon icon={faHeartCrack} size="10x" />
                </div>

                <div>
                    <p className="text-capitalize fs-3">
                        no movies in watch list
                    </p>
                </div>

                <div>
                    <Button
                        className="bg-warning fs-3 text-capitalize px-5 py-3"
                        variant="warning"
                        onClick={() => {
                            navigate(`/`);
                        }}
                    >
                        back to home
                    </Button>
                </div>
            </div>
        </>
    );
}

export default NoWatch;
