import PageHeader from '../layout/PageHeader.jsx';
import ProjectGrid from '../components/project/ProjectGrid.jsx';
import { projects } from '../data/projects.js';

export default function ProjectPage() {
  return (
    <>
      <PageHeader title="Projects" />
      <ProjectGrid projects={projects} />
    </>
  );
}
