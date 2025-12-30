"use client";
import Link from 'next/link';
import React from 'react';

const CustomLink = ({ path, children }) => {
  return (
    <div>
      <Link href={path}>{children}</Link>
    </div>
  );
};

export default CustomLink;