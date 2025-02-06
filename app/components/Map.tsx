'use client';

import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';
import React from 'react';

const MapContainer = dynamic(
	() => import('react-leaflet').then(mod => mod.MapContainer),
	{ ssr: false }
);
const TileLayer = dynamic(
	() => import('react-leaflet').then(mod => mod.TileLayer),
	{ ssr: false }
);
const Marker = dynamic(
	() => import('react-leaflet').then(mod => mod.Marker),
	{ ssr: false }
);
const Popup = dynamic(
	() => import('react-leaflet').then(mod => mod.Popup),
	{ ssr: false }
);

interface MapProps {
	pinned: [number, number];
}

const Map: React.FC<MapProps> = ({ pinned }) => {
	return (
		<MapContainer
			center={pinned}
			zoom={13}
			style={{ height: '400px', width: '100%' }}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			<Marker position={pinned}>
				<Popup>
					Location: {pinned[0]}, {pinned[1]}
				</Popup>
			</Marker>
		</MapContainer>
	);
};

export default Map;
