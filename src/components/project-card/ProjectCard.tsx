import React from 'react';
import ProjectCardCarousel from './ProjectCardCarousel';
import s from './ProjectCard.scss';

interface IProjectCardProps {
  photos: string[];
  tags?: string;
  projectName?: string;
  description?: string;
  buttonText?: string;
  url?: string;
  deployedUrl?: string;
}

export const ProjectCard = ({
  photos,
  tags = 'JavaScript, React',
  projectName = 'Name placeholder',
  description = 'Placeholder description Placeholder description Placeholder description Placeholder description Placeholder description Placeholder description Placeholder description Placeholder description Placeholder description Placeholder description oh god how long does this go this is a  long text that never ends please stop it hurts',
  buttonText = 'Github',
  url = 'https://www.github.com',
  deployedUrl = 'https://google.com'
}: IProjectCardProps) => {
  return (
    <div className={s.card}>
      <ProjectCardCarousel photos={photos} />
      <div className={s.card__tags}>{tags}</div>
      <div className={s.card__container}>
        <div className={s.card__name}>{projectName}</div>
        <div className={s.card__description}>{description}</div>
        <div className={s.card__container__row}>
          <a className={s.card__button} href={url}>
            {buttonText}
          </a>
          {deployedUrl && (
            <a className={s.card__button_live} href={deployedUrl}>
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
