import { HashRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LanguageProvider } from '../../context/LanguageProvider';
import { otherProjectsData } from '../../data/projectsData';
import { OtherProject } from './OtherProject';

const projectWithDemo = otherProjectsData.filter((project) => {
  return project.demoId != null && project.demoId !== '';
})[0];

test('view demo in the other-project modal is a link to the demo query', async () => {
  render(
    <LanguageProvider>
      <HashRouter>
        <OtherProject otherProject={projectWithDemo} />
      </HashRouter>
    </LanguageProvider>
  );

  await userEvent.click(screen.getByText(projectWithDemo.projectName));

  const link = await screen.findByRole('link', { name: /view demo|ver demo/i });
  expect(link.getAttribute('href')).toBe('#/projects?demo=' + encodeURIComponent(projectWithDemo.demoId));
});
