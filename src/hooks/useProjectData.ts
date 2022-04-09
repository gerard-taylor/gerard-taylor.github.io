import { useState, useEffect } from 'react';
import getResume from 'services/getResume';
import ResumeData from "types/ResumeData";


export default function useResumeData(pathName: string, projectName:string) {
  const [resumeData, setResumeData] = useState<(ResumeData)>({});

  useEffect(() => {
    function handleSuccess(data:ResumeData) {
      setResumeData(data);
    }

    getResume(pathName, handleSuccess);
  }, [setResumeData]);

  return resumeData.projects?.find((proj) => projectName == proj.title);
}