import { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TechStack } from '../tech-stack/TechStack'
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import './_custom-modal.css';
import { LanguageContext } from '../../context/LanguageContext';
import { LIVE_DEMO_HANDOFF_MS, navigateToLiveDemo } from '../../utils/liveDemoHandoff';

export const FeaturedProject = ({ featuredProject }) => {

	const { siteLang } = useContext(LanguageContext)
	const navigate = useNavigate();
	const [open, setOpen] = useState(false);
	const [heroLoaded, setHeroLoaded] = useState(false);
	const [modalBannerLoaded, setModalBannerLoaded] = useState(false);
	const handoffTimeoutRef = useRef(null);

	const demoId = featuredProject.demoId;
	const hasDemo = demoId != null && demoId !== '';

	const heroWrapperClass = heroLoaded === true
		? 'featured-project-img-wrapper is-loaded'
		: 'featured-project-img-wrapper';

	const modalBannerWrapperClass = modalBannerLoaded === true
		? 'modal-hero-banner-wrapper is-loaded'
		: 'modal-hero-banner-wrapper';

	const demoChipLabel = siteLang === 'ES' ? 'Demo' : 'Demo';
	const viewDemoLabel = siteLang === 'ES' ? 'Ver demo' : 'View demo';

	useEffect(() => {
		return () => {
			if (handoffTimeoutRef.current != null) {
				clearTimeout(handoffTimeoutRef.current);
			}
		};
	}, []);

	const handleViewDemo = (event) => {
		event.preventDefault();
		event.stopPropagation();

		if (hasDemo !== true) {
			return;
		}

		setOpen(false);

		if (handoffTimeoutRef.current != null) {
			clearTimeout(handoffTimeoutRef.current);
		}

		handoffTimeoutRef.current = setTimeout(() => {
			navigateToLiveDemo(navigate, demoId);
			handoffTimeoutRef.current = null;
		}, LIVE_DEMO_HANDOFF_MS);
	};

	return (
		<>
			<div className='project-slide-wrapper' key={featuredProject.index} onClick={() => setOpen(true)} >
				{
					hasDemo === true
						? <span className='project-demo-chip'>{demoChipLabel}</span>
						: null
				}

				<div className='project-slide-detail-col'>
					<div className='featured-project-header'>
						<h4 className='featured-project-name'>
							{featuredProject.projectName}
						</h4>
						<p className='featured-project-subtitle'>
							{featuredProject.projectSubtitle[siteLang]}
						</p>
					</div>
					<div className='featured-project-body'>
						<p className='featured-project-paragraph'>
							{featuredProject.projectShortDescription[siteLang]}
						</p>
					</div>
					<div className='featured-project-footer'>
						<p className='featured-project-role'>
							{ (siteLang === 'EN')
								? 'Role: '
								: 'Rol: '
							}
							{featuredProject.projectPosition}
						</p>
						<TechStack stack={featuredProject.tecStack} />
					</div>
				</div>

				<div className='project-slide-image-col'>
					<div className={heroWrapperClass}>
						<img
							className='featured-project-img'
							src={featuredProject['heroImageUrl']}
							alt=''
							onLoad={() => setHeroLoaded(true)}
							onError={() => setHeroLoaded(true)}
						/>
					</div>

				</div>
			</div>
			<Modal
				open={open}
				onClose={() => setOpen(false)}
				center
				classNames={{
					overlay: 'customOverlay',
					modal: 'customModal',
				}}
			>
				<article className='modal-wrapper'>
					<div className={modalBannerWrapperClass}>
						<img
							className='modal-hero-banner-img'
							src={featuredProject.projectImageUrl}
							alt=''
							onLoad={() => setModalBannerLoaded(true)}
							onError={() => setModalBannerLoaded(true)}
						/>
					</div>
					<h1 className='modal-project-name'>{featuredProject.projectName}</h1>
					<h4 className='modal-project-subtitle'>{featuredProject.projectSubtitle[siteLang]}</h4>
					<p className='modal-project-date'>{featuredProject.projectDate}</p>
					<div className='modal-stack-wrapper'>
						<TechStack stack={featuredProject.tecStack} />
					</div>
					<div className='modal-long-description-wrapper'>
						{featuredProject.projectLongDescriptionText[siteLang].map((item, index) =>
							<p className='modal-project-paragraph' key={index}>
								{item}
							</p>
						)}
					</div>
					{
						hasDemo === true
							? <button
								type='button'
								className='modal-view-demo-link'
								onClick={handleViewDemo}
							  >
								{viewDemoLabel}
							  </button>
							: null
					}
				</article>
			</Modal>
		</>
	)
}
