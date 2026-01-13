import React from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Ruler {
  id: string;
  name: string;
  years: string;
  region: 'TaraRomaneasca' | 'Moldova' | 'Transilvania';
  description: string;
  imageUrl?: string;
}

export interface Factor {
  title: string;
  icon: React.ReactNode;
  description: string;
  type: 'geo' | 'pol' | 'mil' | 'eco';
}