import React from "react";
import StudentScoresForm from "./studentScoresForm";
import StudentScoresList from "./studentScoresList";
import { StudentScoresProvider } from "./studentScoresContext";

const StudentScores = () => {
	const containerStyle = { margin: "0 auto", width: "80%" };

	return (
		<div style={containerStyle}>
			<StudentScoresProvider>
				<StudentScoresList />
				<StudentScoresForm />
			</StudentScoresProvider>
		</div>
	);
};

export default StudentScores;
