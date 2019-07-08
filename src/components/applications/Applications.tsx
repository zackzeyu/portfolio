import React from 'react';
import { ProjectCard } from 'components/project-card/ProjectCard';
import { FlexBox } from 'components/flexbox/FlexBox';
import Fade from 'react-reveal/Fade';
import s from './Applications.scss';

interface IProject {
  photos?: string[];
  tags: string;
  projectName: string;
  description: string;
  url: string;
}

interface IApplicationsProps {
  projects: IProject[];
}

export default function Applications({ projects }: IApplicationsProps) {
  return (
    <div id="applications" className={s.applications}>
      <div className={s.applications__heading}>Select Applications</div>
      <FlexBox>
        <Fade bottom fraction={0.35}>
          {projects.map(project => (
            <ProjectCard key={project.projectName} {...project} />
          ))}
        </Fade>
      </FlexBox>
    </div>
  );
}
