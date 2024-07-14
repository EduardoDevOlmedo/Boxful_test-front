import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Albert_Sans } from '@next/font/google'
import Navbar from '../components/shared/Navbar';
import { Metadata } from 'next';
import ReactQueryProvider from './ReactQueryProvider';

const AlbertSans = Albert_Sans({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Prueba tecnica",
  description: "Prueba tecnica para Boxful",
};

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body className={AlbertSans.className}>
      <ReactQueryProvider>
      <AntdRegistry>
          <Navbar />
          {children}
      </AntdRegistry>
      </ReactQueryProvider>
    </body>
  </html>
);

export default RootLayout;