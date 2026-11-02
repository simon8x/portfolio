import { Modal } from 'react-responsive-modal';
import { ProjectModalStoryBlocks } from './ProjectModalStoryBlocks';

const getLocalizedCopy = (field, siteLang) => {
	if (field == null) {
		return '';
	}
	const localized = field[siteLang];
	if (localized != null && localized !== '') {
		return localized;
	}
	return field.EN == null ? '' : field.EN;
};

const getLocalizedList = (field, siteLang) => {
	if (field == null) {
		return [];
	}
	const localized = field[siteLang];
	if (localized != null && localized.length > 0) {
		return localized;
	}
	return field.EN == null ? [] : field.EN;
};

export const ProjectCaseStudyModal = ({ caseStudy, siteLang, open, onClose }) => {
	if (caseStudy == null) {
		return null;
	}

	const title = getLocalizedCopy(caseStudy.title, siteLang);
	const subtitle = getLocalizedCopy(caseStudy.subtitle, siteLang);
	const introParagraphs = getLocalizedList(caseStudy.intro, siteLang);
	const privacyNote = getLocalizedCopy(caseStudy.privacyNote, siteLang);

	return (
		<Modal
			open={open}
			onClose={onClose}
			center
			classNames={{
				overlay: 'customOverlay',
				modal: 'customModal customModal--case-study',
			}}
		>
			<article className='modal-wrapper modal-wrapper--case-study'>
				<p className='modal-case-study-eyebrow'>
					{siteLang === 'ES' ? 'Método / investigación' : 'Method / research'}
				</p>
				<h2 className='modal-case-study-title'>{title}</h2>
				{
					subtitle === ''
						? null
						: <h3 className='modal-case-study-subtitle'>{subtitle}</h3>
				}
				<div className='modal-long-description-wrapper'>
					{introParagraphs.map((paragraph, index) => (
						<p className='modal-project-paragraph' key={index}>
							{paragraph}
						</p>
					))}
				</div>
				{
					privacyNote === ''
						? null
						: <p className='modal-case-study-privacy'>{privacyNote}</p>
				}
				<ProjectModalStoryBlocks
					blocks={caseStudy.blocks}
					siteLang={siteLang}
					chartScope='cstool'
				/>
			</article>
		</Modal>
	);
};
