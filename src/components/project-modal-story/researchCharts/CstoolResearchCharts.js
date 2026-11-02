const CHART_SURFACE = '#141414';
const CHART_MUTED = 'rgba(247, 247, 247, 0.65)';
const CHART_TEXT = 'rgba(247, 247, 247, 0.9)';
const CHART_ACCENT = '#ff9800';
const CHART_BASE = '#64b5f6';
const CHART_GRID = 'rgba(247, 247, 247, 0.15)';

const getLocale = (siteLang) => siteLang === 'ES' ? 'es-AR' : 'en-US';

const formatNumber = (value, siteLang, maxDigits) => {
	const digits = maxDigits == null ? 0 : maxDigits;
	return value.toLocaleString(getLocale(siteLang), {
		minimumFractionDigits: digits,
		maximumFractionDigits: digits,
	});
};

const formatRange = (min, max, siteLang) => {
	const separator = siteLang === 'ES' ? ' a ' : ' to ';
	return formatNumber(min, siteLang, 0) + separator + formatNumber(max, siteLang, 0);
};

const sumBy = (items, getValue) => items.reduce((total, item) => total + getValue(item), 0);

const minBy = (items, getValue) => items.reduce((min, item) => {
	return getValue(item) < min ? getValue(item) : min;
}, Infinity);

const maxBy = (items, getValue) => items.reduce((max, item) => {
	return getValue(item) > max ? getValue(item) : max;
}, -Infinity);

const getMedian = (values) => {
	const sorted = values.slice().sort((a, b) => a - b);
	const middle = Math.floor(sorted.length / 2);
	return sorted.length % 2 === 0
		? (sorted[middle - 1] + sorted[middle]) / 2
		: sorted[middle];
};

const shortenHandle = (handle) => {
	if (handle == null || handle === '') {
		return '';
	}
	const parts = handle.split('#');
	return parts.length === 1 ? handle : parts[0] + '#…';
};

const VizShell = ({ title, subtitle, children }) => (
	<div className='cstool-research-viz'>
		{
			title == null || title === ''
				? null
				: <p className='cstool-research-viz__title'>{title}</p>
		}
		{
			subtitle == null || subtitle === ''
				? null
				: <p className='cstool-research-viz__subtitle'>{subtitle}</p>
		}
		<div className='cstool-research-viz__body'>
			{children}
		</div>
	</div>
);

const StatTiles = ({ tiles }) => (
	<div className='cstool-research-stats'>
		{tiles.map((tile, index) => (
			<div className='cstool-research-stats__tile' key={index}>
				<p className='cstool-research-stats__label'>{tile.label}</p>
				<p className='cstool-research-stats__value'>{tile.value}</p>
				{
					tile.note == null || tile.note === ''
						? null
						: <p className='cstool-research-stats__note'>{tile.note}</p>
				}
			</div>
		))}
	</div>
);

/* 1 · Muestra del export (filas reales de la hoja DATA, nombres de pin abreviados) */

const TRANSACTION_SAMPLE = [
	{ price: 10, pin: 'Nordic Combined', piece: '647056', seller: 'lisa_round_flower#CWC0S5', isRepeat: false },
	{ price: 2, pin: 'Short Track Speed', piece: '639844', seller: 'leandra_decent_glade#CWQM', isRepeat: true },
	{ price: 25, pin: 'Short Track Speed', piece: '639844', seller: 'jerrilyn_super_boat#VL2LK7', isRepeat: true },
	{ price: 6, pin: 'Short Track Speed', piece: '639844', seller: 'brit_plain_shape#JG3QEJ', isRepeat: true },
	{ price: 1050, pin: 'Snowboarding', piece: '674858', seller: 'deidre_hard_sea#HWJ7P3', isRepeat: false },
	{ price: 800, pin: 'Cross-Country Skiing', piece: '674606', seller: 'daniela_kind_voice#GUVRB5', isRepeat: false },
	{ price: 500, pin: 'Curling', piece: '674989', seller: 'jordan_angry_guy#JO87VQ', isRepeat: false },
	{ price: 777, pin: 'Luge', piece: '674509', seller: 'kristi_holy_resonance#LSNCW', isRepeat: false },
];

export const CstoolTransactionSampleTable = ({ siteLang }) => {
	const title = siteLang === 'ES'
		? 'Ventas cerradas del marketplace'
		: 'Completed marketplace sales';
	const subtitle = siteLang === 'ES'
		? 'Extracto de 8 filas, 2 a 1.050 USD. Pieza 639844, tres vendedores.'
		: 'Eight-row excerpt, 2 to 1,050 USD. Piece 639844, three sellers.';

	const getRowClass = (row) => {
		const classes = [
			row.price > 100 ? 'is-outlier' : '',
			row.isRepeat === true ? 'is-repeat' : '',
		];
		return classes.filter((name) => name.length > 0).join(' ');
	};

	return (
		<VizShell title={title} subtitle={subtitle}>
			<div className='cstool-research-table-wrap'>
				<table className='cstool-research-table'>
					<thead>
						<tr>
							<th>{siteLang === 'ES' ? 'Precio' : 'Price'}</th>
							<th>Pin</th>
							<th>{siteLang === 'ES' ? 'Pieza' : 'Piece'}</th>
							<th>{siteLang === 'ES' ? 'Vendedor' : 'Seller'}</th>
						</tr>
					</thead>
					<tbody>
						{TRANSACTION_SAMPLE.map((row, index) => (
							<tr key={index} className={getRowClass(row)}>
								<td>{formatNumber(row.price, siteLang, 0)}</td>
								<td>{row.pin}</td>
								<td>{row.piece}</td>
								<td>{shortenHandle(row.seller)}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</VizShell>
	);
};

/* 2 · Cohorte Premiere Common: 20 pins de la misma edición y rareza */

const PIN_COHORT = [
	{ pin: 'Aquatics', sales: 477, money: 4978 },
	{ pin: 'Boxing', sales: 437, money: 10009 },
	{ pin: 'Basketball', sales: 429, money: 6058 },
	{ pin: 'Athletics', sales: 420, money: 578 },
	{ pin: 'Equestrian', sales: 395, money: 1439 },
	{ pin: 'Weightlifting', sales: 386, money: 682 },
	{ pin: 'Fencing', sales: 380, money: 1553 },
	{ pin: 'Judo', sales: 375, money: 1931 },
	{ pin: 'Canoe', sales: 356, money: 2723 },
	{ pin: 'Modern Pentathlon', sales: 352, money: 1158 },
	{ pin: 'Sailing', sales: 347, money: 985 },
	{ pin: 'Wrestling', sales: 343, money: 496 },
	{ pin: 'Cycling', sales: 337, money: 4405 },
	{ pin: 'Rowing', sales: 336, money: 796 },
	{ pin: 'Water Polo', sales: 335, money: 2080 },
	{ pin: 'Gymnastics', sales: 328, money: 626 },
	{ pin: 'Shooting', sales: 314, money: 5023 },
	{ pin: 'Football', sales: 312, money: 1546 },
	{ pin: 'Hockey', sales: 306, money: 8987 },
	{ pin: 'Volleyball', sales: 290, money: 535 },
];

const FLAG_MULTIPLIER = 2;

export const CstoolPinCohortChart = ({ siteLang }) => {
	const title = siteLang === 'ES'
		? 'Precio promedio por venta, por pin'
		: 'Average price per sale, by pin';
	const subtitle = siteLang === 'ES'
		? 'Misma edición y rareza (Premiere Common). Sep 2021 a sep 2023'
		: 'Same edition and rarity (Premiere Common). Sep 2021 to Sep 2023';

	const pins = PIN_COHORT
		.map((item) => Object.assign({}, item, { ticket: item.money / item.sales }))
		.sort((a, b) => b.ticket - a.ticket);

	const median = getMedian(pins.map((item) => item.ticket));
	const threshold = median * FLAG_MULTIPLIER;
	const flagged = pins.filter((item) => item.ticket >= threshold);

	const totalSales = sumBy(pins, (item) => item.sales);
	const totalMoney = sumBy(pins, (item) => item.money);
	const flaggedMoneyShare = Math.round((sumBy(flagged, (item) => item.money) / totalMoney) * 100);
	const flaggedSalesShare = Math.round((sumBy(flagged, (item) => item.sales) / totalSales) * 100);
	const maxTicket = maxBy(pins, (item) => item.ticket);

	const tiles = [
		{
			label: siteLang === 'ES' ? 'Ventas por pin' : 'Sales per pin',
			value: formatRange(minBy(pins, (item) => item.sales), maxBy(pins, (item) => item.sales), siteLang),
			note: siteLang === 'ES' ? 'Volumen parejo' : 'Even volume',
		},
		{
			label: siteLang === 'ES' ? 'Dinero por pin (USD)' : 'Money per pin (USD)',
			value: formatRange(minBy(pins, (item) => item.money), maxBy(pins, (item) => item.money), siteLang),
			note: siteLang === 'ES' ? 'Dispersión de 20 veces' : '20x spread',
		},
		{
			label: siteLang === 'ES' ? 'Pins con alerta' : 'Pins flagged on open',
			value: flagged.length + (siteLang === 'ES' ? ' de ' : ' of ') + pins.length,
			note: siteLang === 'ES'
				? flaggedMoneyShare + '% del dinero con ' + flaggedSalesShare + '% de las ventas'
				: flaggedMoneyShare + '% of the money with ' + flaggedSalesShare + '% of the sales',
		},
	];

	return (
		<VizShell title={title} subtitle={subtitle}>
			<StatTiles tiles={tiles} />
			<ul className='cstool-research-bar-list'>
				{pins.map((item, index) => {
					const widthPercent = Math.round((item.ticket / maxTicket) * 100);
					const isFlagged = item.ticket >= threshold;
					const fillClass = isFlagged === true
						? 'cstool-research-bar-list__fill'
						: 'cstool-research-bar-list__fill cstool-research-bar-list__fill--muted';
					return (
						<li className='cstool-research-bar-list__item' key={index}>
							<span className='cstool-research-bar-list__label'>{item.pin}</span>
							<span className='cstool-research-bar-list__track'>
								<span className={fillClass} style={{ width: widthPercent + '%' }} />
							</span>
							<span className='cstool-research-bar-list__value'>{formatNumber(item.ticket, siteLang, 1)}</span>
						</li>
					);
				})}
			</ul>
			<p className='cstool-research-viz__footnote'>
				{siteLang === 'ES'
					? 'Mediana de los 20 promedios: ' + formatNumber(median, siteLang, 1) + ' USD. Alerta: el doble (' + formatNumber(threshold, siteLang, 1) + ' USD), al abrir fila.'
					: 'Median of twenty averages: ' + formatNumber(median, siteLang, 1) + ' USD. Drill-down flag: twice that (' + formatNumber(threshold, siteLang, 1) + ' USD).'}
			</p>
		</VizShell>
	);
};

/* 3 · Cuentas: dinero ganado vs cantidad de ventas (24 primeras de Top Sellers by Earned Money) */

const TOP_EARNERS = [
	{ sales: 1191, earned: 24335 },
	{ sales: 60, earned: 14925 },
	{ sales: 25, earned: 13364 },
	{ sales: 53, earned: 8569 },
	{ sales: 232, earned: 7984 },
	{ sales: 192, earned: 7635 },
	{ sales: 21, earned: 7319 },
	{ sales: 201, earned: 6534 },
	{ sales: 22, earned: 6513 },
	{ sales: 1826, earned: 6008 },
	{ sales: 14, earned: 5441 },
	{ sales: 732, earned: 5383 },
	{ sales: 11, earned: 4910 },
	{ sales: 326, earned: 4722 },
	{ sales: 15, earned: 4698 },
	{ sales: 11, earned: 4689 },
	{ sales: 10, earned: 4655 },
	{ sales: 318, earned: 4617 },
	{ sales: 15, earned: 4599 },
	{ sales: 178, earned: 4560 },
	{ sales: 361, earned: 4535 },
	{ sales: 19, earned: 4474 },
	{ sales: 45, earned: 4388 },
	{ sales: 69, earned: 4323 },
];

const TICKET_THRESHOLD = 200;

export const CstoolAccountsScatterChart = ({ siteLang }) => {
	const title = siteLang === 'ES'
		? 'Dinero ganado vs ventas, por cuenta'
		: 'Money earned vs sales, by account';
	const subtitle = siteLang === 'ES'
		? '24 cuentas con más ingresos. Umbral 200 USD/venta (fijado en 12 cuentas, aplicado a las 24). Sep 2021 a sep 2023'
		: 'Top 24 by revenue. 200 USD per sale threshold (from twelve accounts, applied to all 24). Sep 2021 to Sep 2023';

	const chartWidth = 560;
	const chartHeight = 290;
	const padding = { top: 18, right: 18, bottom: 44, left: 52 };
	const innerWidth = chartWidth - padding.left - padding.right;
	const innerHeight = chartHeight - padding.top - padding.bottom;
	const xMin = 8;
	const xMax = 2200;
	const yMax = 26000;

	const xScale = (sales) => {
		const ratio = (Math.log10(sales) - Math.log10(xMin)) / (Math.log10(xMax) - Math.log10(xMin));
		return padding.left + ratio * innerWidth;
	};
	const yScale = (earned) => padding.top + innerHeight - (earned / yMax) * innerHeight;

	const points = TOP_EARNERS.map((item) => Object.assign({}, item, {
		isFlagged: item.earned / item.sales >= TICKET_THRESHOLD,
	}));
	const flaggedCount = points.filter((item) => item.isFlagged === true).length;
	const baseCount = points.length - flaggedCount;

	const xTicks = [10, 100, 1000];
	const yTicks = [0, 10000, 20000];

	return (
		<VizShell title={title} subtitle={subtitle}>
			<svg
				className='cstool-research-line-chart'
				viewBox={'0 0 ' + chartWidth + ' ' + chartHeight}
				role='img'
				aria-hidden='true'
			>
				<rect width={chartWidth} height={chartHeight} fill={CHART_SURFACE} rx='8' />
				{yTicks.map((tick) => (
					<g key={'y' + tick}>
						<line
							x1={padding.left}
							x2={padding.left + innerWidth}
							y1={yScale(tick)}
							y2={yScale(tick)}
							stroke={CHART_GRID}
						/>
						<text x={padding.left - 8} y={yScale(tick) + 3} fill={CHART_MUTED} fontSize='10' textAnchor='end'>
							{tick === 0 ? '0' : (tick / 1000) + 'k'}
						</text>
					</g>
				))}
				{xTicks.map((tick) => (
					<g key={'x' + tick}>
						<line
							x1={xScale(tick)}
							x2={xScale(tick)}
							y1={padding.top}
							y2={padding.top + innerHeight}
							stroke={CHART_GRID}
						/>
						<text x={xScale(tick)} y={padding.top + innerHeight + 16} fill={CHART_MUTED} fontSize='10' textAnchor='middle'>
							{formatNumber(tick, siteLang, 0)}
						</text>
					</g>
				))}
				{points.map((point, index) => (
					<circle
						key={index}
						cx={xScale(point.sales)}
						cy={yScale(point.earned)}
						r='5'
						fill={point.isFlagged === true ? CHART_ACCENT : CHART_BASE}
						fillOpacity='0.9'
						stroke={CHART_SURFACE}
						strokeWidth='1'
					/>
				))}
				<text x={padding.left + 8} y={padding.top + 12} fill={CHART_TEXT} fontSize='11'>
					{siteLang === 'ES' ? 'Pocas ventas, precio alto' : 'Few sales, high price'}
				</text>
				<text x={padding.left + innerWidth - 8} y={padding.top + 120} fill={CHART_TEXT} fontSize='11' textAnchor='end'>
					{siteLang === 'ES' ? 'Mucho volumen, precio bajo' : 'High volume, low price'}
				</text>
				<text x={padding.left + innerWidth / 2} y={chartHeight - 8} fill={CHART_MUTED} fontSize='10' textAnchor='middle'>
					{siteLang === 'ES' ? 'Ventas (escala logarítmica)' : 'Sales (log scale)'}
				</text>
				<text x={14} y={padding.top + innerHeight / 2} fill={CHART_MUTED} fontSize='10' textAnchor='middle' transform={'rotate(-90 14 ' + (padding.top + innerHeight / 2) + ')'}>
					{siteLang === 'ES' ? 'Dinero ganado (USD)' : 'Money earned (USD)'}
				</text>
			</svg>
			<ul className='cstool-research-legend'>
				<li className='cstool-research-legend__item'>
					<span className='cstool-research-legend__dot cstool-research-legend__dot--flagged' />
					{siteLang === 'ES'
						? flaggedCount + ' cuentas con ' + TICKET_THRESHOLD + ' USD por venta o más (umbral paso 3)'
						: flaggedCount + ' accounts at ' + TICKET_THRESHOLD + ' USD per sale or more (step 3 threshold)'}
				</li>
				<li className='cstool-research-legend__item'>
					<span className='cstool-research-legend__dot' />
					{siteLang === 'ES'
						? baseCount + ' cuentas por debajo'
						: baseCount + ' accounts below'}
				</li>
			</ul>
		</VizShell>
	);
};

/* 5 · Estado KYC de todas las cuentas (hoja accounts per KYC status) */

const KYC_SEGMENTS = [
	{ label: 'approved', value: 14027, color: '#81c784' },
	{ label: 'expired', value: 6043, color: '#ef5350' },
	{ label: 'declined', value: 5139, color: '#ffb74d' },
	{ label: 'created', value: 1821, color: CHART_BASE },
	{ label: 'NULL', value: 992, color: 'rgba(247, 247, 247, 0.45)' },
	{ label: 'completed', value: 51, color: 'rgba(247, 247, 247, 0.45)' },
	{ label: 'failed', value: 30, color: 'rgba(247, 247, 247, 0.45)' },
];

export const CstoolKycStatusChart = ({ siteLang }) => {
	const title = siteLang === 'ES' ? 'Cuentas por estado KYC' : 'Accounts by KYC status';
	const total = sumBy(KYC_SEGMENTS, (item) => item.value);
	const approved = KYC_SEGMENTS.filter((item) => item.label === 'approved')[0];
	const notApprovedShare = ((total - approved.value) / total) * 100;
	const subtitle = siteLang === 'ES'
		? formatNumber(total, siteLang, 0) + ' cuentas. Sin KYC aprobado: ' + formatNumber(notApprovedShare, siteLang, 1) + '%. Sep 2021 a sep 2023'
		: formatNumber(total, siteLang, 0) + ' accounts. Without approved KYC: ' + formatNumber(notApprovedShare, siteLang, 1) + '%. Sep 2021 to Sep 2023';

	return (
		<VizShell title={title} subtitle={subtitle}>
			<ul className='cstool-research-kyc-list'>
				{KYC_SEGMENTS.map((segment, index) => {
					const share = (segment.value / total) * 100;
					const widthPercent = share < 1 ? 1 : Math.round(share);
					return (
						<li className='cstool-research-kyc-list__item' key={index}>
							<span className='cstool-research-kyc-list__label'>{segment.label}</span>
							<span className='cstool-research-kyc-list__value'>
								{formatNumber(segment.value, siteLang, 0)}
							</span>
							<span className='cstool-research-kyc-list__track'>
								<span
									className='cstool-research-kyc-list__fill'
									style={{ width: widthPercent + '%', backgroundColor: segment.color }}
								/>
							</span>
						</li>
					);
				})}
			</ul>
		</VizShell>
	);
};

/* 6 · Prototipo de la pantalla de seguimiento (valores ilustrativos) */

export const CstoolReportsWireframe = ({ siteLang }) => {
	const title = siteLang === 'ES' ? 'Seguimiento de cuentas' : 'Account watchlist';
	const subtitle = siteLang === 'ES'
		? 'Cola según paso 3; contexto del pin al abrir (paso 2). Valores ilustrativos'
		: 'Queue from step 3; pin context on open (step 2). Illustrative values';

	const accounts = [
		{
			handle: 'account_a#…',
			withdrawals: siteLang === 'ES' ? 'Retiros 3,2 veces el promedio' : 'Withdrawals 3.2x the average',
			kyc: siteLang === 'ES' ? 'KYC sin aprobar' : 'KYC not approved',
			isSelected: true,
		},
		{
			handle: 'account_b#…',
			withdrawals: siteLang === 'ES' ? 'Retiros 2,1 veces el promedio' : 'Withdrawals 2.1x the average',
			kyc: siteLang === 'ES' ? 'KYC aprobado' : 'KYC approved',
			isSelected: false,
		},
		{
			handle: 'account_c#…',
			withdrawals: siteLang === 'ES' ? 'Retiros en el promedio' : 'Withdrawals at the average',
			kyc: siteLang === 'ES' ? 'KYC sin aprobar' : 'KYC not approved',
			isSelected: false,
		},
	];

	const cycleNodes = [
		{ id: 'A', x: 130, y: 38 },
		{ id: 'B', x: 218, y: 160 },
		{ id: 'C', x: 42, y: 160 },
	];

	return (
		<VizShell title={title} subtitle={subtitle}>
			<div className='cstool-research-wireframe'>
				<div className='cstool-research-wireframe__column'>
					<p className='cstool-research-wireframe__panel-title'>
						{siteLang === 'ES' ? 'Cola de revisión' : 'Review queue'}
					</p>
					<ul className='cstool-research-wireframe__list'>
						{accounts.map((account, index) => (
							<li
								className={account.isSelected === true
									? 'cstool-research-wireframe__row is-selected'
									: 'cstool-research-wireframe__row'}
								key={index}
							>
								<span className='cstool-research-wireframe__handle'>{account.handle}</span>
								<span className='cstool-research-wireframe__chips'>
									<span className='cstool-research-wireframe__chip is-alert'>{account.withdrawals}</span>
									<span className='cstool-research-wireframe__chip'>{account.kyc}</span>
								</span>
								<span className='cstool-research-wireframe__link'>
									{siteLang === 'ES' ? 'Ver registro de actividad' : 'View activity log'}
								</span>
							</li>
						))}
					</ul>
				</div>
				<div className='cstool-research-wireframe__column'>
					<p className='cstool-research-wireframe__panel-title'>
						{siteLang === 'ES' ? 'Ciclo de operaciones del pin' : 'Pin operation cycle'}
					</p>
					<svg
						className='cstool-research-wireframe__cycle'
						viewBox='0 0 260 200'
						role='img'
						aria-hidden='true'
					>
						<defs>
							<marker id='cstool-cycle-arrow' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'>
								<path d='M0,0 L6,3 L0,6 Z' fill={CHART_ACCENT} />
							</marker>
						</defs>
						<path d='M143 56 L206 142' stroke={CHART_ACCENT} strokeWidth='2' fill='none' markerEnd='url(#cstool-cycle-arrow)' />
						<path d='M196 160 L64 160' stroke={CHART_ACCENT} strokeWidth='2' fill='none' markerEnd='url(#cstool-cycle-arrow)' />
						<path d='M54 142 L117 56' stroke={CHART_ACCENT} strokeWidth='2' fill='none' markerEnd='url(#cstool-cycle-arrow)' />
						<text x='188' y='88' fill={CHART_TEXT} fontSize='11' textAnchor='middle'>$12</text>
						<text x='130' y='182' fill={CHART_TEXT} fontSize='11' textAnchor='middle'>$38</text>
						<text x='72' y='88' fill={CHART_TEXT} fontSize='11' textAnchor='middle'>$95</text>
						{cycleNodes.map((node) => (
							<g key={node.id}>
								<circle cx={node.x} cy={node.y} r='20' fill={CHART_SURFACE} stroke={CHART_ACCENT} strokeWidth='2' />
								<text x={node.x} y={node.y + 4} fill={CHART_TEXT} fontSize='13' textAnchor='middle'>{node.id}</text>
							</g>
						))}
					</svg>
					<p className='cstool-research-wireframe__cycle-note'>
						{siteLang === 'ES'
							? 'Alerta de pin: precio frente a pares (paso 2). Montos del ciclo esquemáticos'
							: 'Pin flag vs peers (step 2). Schematic cycle amounts'}
					</p>
				</div>
			</div>
		</VizShell>
	);
};

export const CSTOOL_RESEARCH_CHARTS = {
	'cstool-transaction-sample': CstoolTransactionSampleTable,
	'cstool-pin-cohort': CstoolPinCohortChart,
	'cstool-accounts-scatter': CstoolAccountsScatterChart,
	'cstool-kyc-status': CstoolKycStatusChart,
	'cstool-reports-wireframe': CstoolReportsWireframe,
};
