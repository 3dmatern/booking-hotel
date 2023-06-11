import React from "react";
import { useParams } from "react-router-dom";
import FormSignUp from "../components/ui/formSignUp";
import FormSignIn from "../components/ui/formSignIn";

const Sign = () => {
    const { type } = useParams();
    return (
        <div className="col-md-6 mx-auto shadow p-4">
            {type ? <FormSignUp /> : <FormSignIn />}
        </div>
    );
};

export default Sign;
