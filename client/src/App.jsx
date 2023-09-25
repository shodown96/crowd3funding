import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster, resolveValue } from 'react-hot-toast';

import { Sidebar, Navbar, Toast } from './components';
import { CampaignDetails, CreateCampaign, Home, Profile } from './pages';

const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <Toaster
        position="bottom-left"
        reverseOrder={false}>
        {(t) => <Toast
          type={resolveValue(t.type)}
          message={resolveValue(t.message)} />}
      </Toaster>
      <Helmet>
        <title>Crowd3Fund</title>
        <link rel="icon" href="./assets/thirdweb.png" />
        <meta name="description" content="A Web3-based Crowdfunding application." />
      </Helmet>
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
        </Routes>
      </div>
    </div>
  )
}

export default App