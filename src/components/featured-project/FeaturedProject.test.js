import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LanguageProvider } from '../../context/LanguageProvider';
import { featuredProjectsData } from '../../data/projectsData';
import { FeaturedProject } from './FeaturedProject';
import { getRouterBasename } from '../../utils/siteUrl';

const projectWithDemo = featuredProjectsData.filter((project) => {
  return project.demoId != null && project.demoId !== '';
})[0];

const routerBasename = getRouterBasename() || '';

test('view demo in the featured modal is a link to the demo query', async () => {
  render(
    <LanguageProvider>
      <MemoryRouter basename={getRouterBasename()}>
        <FeaturedProject featuredProject={projectWithDemo} />
      </MemoryRouter>
    </LanguageProvider>
  );

  await userEvent.click(screen.getByText(projectWithDemo.projectName));

  const link = await screen.findByRole('link', { name: /view demo|ver demo/i });
  expect(link.getAttribute('href')).toBe(
    routerBasename + '/projects?demo=' + encodeURIComponent(projectWithDemo.demoId)
  );
});
