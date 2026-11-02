import { CSTOOL_RESEARCH_CHARTS } from './researchCharts/CstoolResearchCharts';

const getLocalizedField = (block, fieldName, siteLang) => {
	const localized = block[fieldName] == null ? null : block[fieldName][siteLang];
	if (localized != null && localized !== '') {
		return localized;
	}
	return block[fieldName] == null ? '' : block[fieldName].EN;
};

const renderChart = (block, siteLang, chartScope) => {
	if (chartScope !== 'cstool') {
		return null;
	}
	const ChartComponent = CSTOOL_RESEARCH_CHARTS[block.chartId];
	if (ChartComponent == null) {
		return null;
	}
	const caption = getLocalizedField(block, 'caption', siteLang);
	return (
		<figure className='modal-project-story-figure modal-project-story-figure--chart'>
			<ChartComponent siteLang={siteLang} />
			{
				caption === ''
					? null
					: <figcaption className='modal-project-story-figure-caption'>{caption}</figcaption>
			}
		</figure>
	);
};

export const ProjectModalStoryBlocks = ({ blocks, siteLang, chartScope }) => {
	if (blocks == null || blocks.length === 0) {
		return null;
	}

	return (
		<div className='modal-project-story'>
			{blocks.map((block, index) => {
				if (block.kind === 'splitChart') {
					const text = getLocalizedField(block, 'text', siteLang);
					const caption = getLocalizedField(block, 'caption', siteLang);
					if (chartScope !== 'cstool') {
						return null;
					}
					const ChartComponent = CSTOOL_RESEARCH_CHARTS[block.chartId];
					if (ChartComponent == null) {
						return null;
					}
					return (
						<div className='modal-project-story-split' key={index}>
							<p className='modal-project-story-split__text'>{text}</p>
							<div className='modal-project-story-split__chart'>
								<ChartComponent siteLang={siteLang} />
								{
									caption === ''
										? null
										: <p className='modal-project-story-figure-caption'>{caption}</p>
								}
							</div>
						</div>
					);
				}

				if (block.kind === 'chart') {
					const chartNode = renderChart(block, siteLang, chartScope);
					if (chartNode == null) {
						return null;
					}
					return (
						<div className='modal-project-story-chart-slot' key={index}>
							{chartNode}
						</div>
					);
				}
				if (block.kind === 'heading') {
					const text = getLocalizedField(block, 'text', siteLang);
					return (
						<h3 className='modal-project-story-heading' key={index}>
							{text}
						</h3>
					);
				}

				if (block.kind === 'text') {
					const text = getLocalizedField(block, 'text', siteLang);
					return (
						<p className='modal-project-story-paragraph' key={index}>
							{text}
						</p>
					);
				}

				if (block.kind === 'figure') {
					const caption = getLocalizedField(block, 'caption', siteLang);
					const alt = getLocalizedField(block, 'alt', siteLang);
					return (
						<figure className='modal-project-story-figure' key={index}>
							<img
								className='modal-project-story-figure-img'
								src={block.imageUrl}
								alt={alt}
								loading='lazy'
							/>
							{
								caption === ''
									? null
									: <figcaption className='modal-project-story-figure-caption'>{caption}</figcaption>
							}
						</figure>
					);
				}

				return null;
			})}
		</div>
	);
};
