/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React, { useState } from 'react';
import macBookImg from '../../public/assets/posts/macbook.jpeg';
import Link from 'next/link';
import Header from '../../components/Header';

const HowToSetUpYourMacForDevelopment2022 = () => {
  const [collapse, setCollapse] = useState(true);
  return (
    <div className="w-full">
      <Header collapse={collapse} setCollapse={setCollapse} />
      <div
        className={
          collapse
            ? 'w-screen h-[30vh] relative'
            : 'w-screen h-[30vh] relative mt-60'
        }>
        <div className="absolute top-0 left-0 w-full h-[30vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={macBookImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[36em] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h1 className="py-2  ml-5 sm:text-5xl">
            How To Setup Your Mac For Development 2022
          </h1>
          {/* <h3 className="ml-5 mb-2">
            Description goes here
          </h3> */}
        </div>
      </div>

      <div className="max-w-[36em] mx-auto p-2 flex flex-col pt-8 px-8">
        <div className="col-span-4">
          <h2 className="my-3">Overview</h2>
          <p>
            Getting a new computer is always a nice feeling, but for developers,
            there's always so much to setup before you can actually get to
            coding. This post is meant for JavaScript and Java developers, but
            feel free to pick and choose what you'd actually like to install.
          </p>

          <h2 className="my-3" id="system-preferences">
            System Preferences
          </h2>
          <h3 className="my-3" id="update-your-system">
            Update your system
          </h3>
          <p> - Apple Menu &gt; About This Mac &gt; Software Update</p>
          <p> - Check Automatically keep my Mac up to date</p>
          <p>
            - If an update was needed, update and restart your computer
            afterwards
          </p>
          <h3 className="my-3" id="users-groups">
            Users &amp; Groups
          </h3>
          <p>Create a new admin account:</p>
          <p>
            - Add a new administrator, logout of your current account, and then
            re-login to the new admin account
          </p>
          <aside className="bg-gray-200">
            <span className="font-bold">Note:</span> This leaves the original
            account untouched and ensures it's always working. Also, the new
            admin account has sudo privileges so everything will work as normal.
          </aside>

          <h3 className="my-3" id="general">
            General
          </h3>
          <p>Appearance &gt; Dark</p>
          <h3 className="my-3" id="desktop-screen-saver">
            Desktop &amp; Screen Saver
          </h3>
          <p>Screen Saver &gt; Hot Corners</p>
          <p> - Bottom Left: Mission Control</p>
          <p> - Bottom Right: Desktop</p>
          <h3 className="my-3" id="dock-menu-bar">
            Dock &amp; Menu Bar
          </h3>
          <p> - Check Automatically hide and show the dock</p>
          <p> - Battery &gt; uncheck Show in Menu Bar</p>
          <p> - Clock &gt; Show Date &gt; Never</p>
          <p> - Clock &gt; Show Day of Week &gt; No</p>
          <p> - Clock &gt; Analog</p>
          <aside className="bg-gray-200">
            <span className="font-bold">Note:</span> We will be installing
            Itsycal (via homebrew) later on, which will give us more flexibility
            in formatting the date and time in the toolbar.
          </aside>
          <h3 className="my-3" id="mission-control">
            Mission Control
          </h3>
          <p> - Mission Control &gt; F1</p>
          <p> - Application Windows &gt; F3</p>
          <p> - Show Desktop &gt; F2</p>
          <aside className="bg-gray-200">
            <span className="font-bold">Note:</span> This is just my personal
            preference for mission control hotkeys, but your keyboard may be
            different so obviously choose what you like.
          </aside>
          <h3 className="my-3" id="siri">
            Siri
          </h3>
          <p> - Uncheck Enable Ask Siri</p>
          <p> - Uncheck Listen for “Hey Siri”</p>
          <p> - Uncheck Show Siri in menu bar</p>
          <h3 className="my-3" id="spotlight">
            Spotlight
          </h3>
          <p>
            - Search Results &gt; uncheck <em>Siri Suggestions</em>
          </p>
          <h3 className="my-3" id="language-region">
            Language &amp; Region
          </h3>
          <p> - Time Format &gt; Check 24-Hour Time</p>
          <h3 className="my-3" id="notifications-focus">
            Notifications &amp; Focus
          </h3>
          <p>
            - Turn all notifications off.
            <br />
            <aside className="bg-gray-200">
              <span className="font-bold">Note:</span> Off should be the default
              for notifications (so you stay focused), but it may be helpful to
              have a few on like headphone notifications (so you know when
              they're connected) and maybe Slack if you're brave enough (after
              we download/install it)
            </aside>
          </p>
          <h3 className="my-3" id="internet-accounts">
            Internet Accounts
          </h3>
          <p>
            {' '}
            - On personal computers only: Add personal email account (like
            Gmail)
          </p>
          <aside className="bg-gray-200">
            <span className="font-bold">WARNING:</span> Never connect your Apple
            ID or personal email account to a work computer. Just want to make
            sure your personal life stays personal.
          </aside>
          <h3 className="my-3" id="security-privacy">
            Security &amp; Privacy
          </h3>
          <p>
            - General &gt; check{' '}
            <em>
              Require password IMMEDIATELY after sleep or screen saver begins
            </em>
          </p>
          <p>
            - General &gt; Allow apps downloaded from &gt; App Store and
            identified developers
          </p>
          <p>
            - General &gt; Advance &gt; check{' '}
            <em>
              Require an administrator password to access system-wide
              preferences
            </em>
          </p>
          <p>
            - Firewall &gt; click <em>Turn Firewall On</em>
          </p>
          <p> - FileVault &gt; Verify it’s turned on</p>
          <p>
            - Privacy &gt; Location Services &gt; uncheck all except{' '}
            <em>Find My</em> and <em>Wallet</em>
          </p>
          <p>
            - Privacy &gt; Location Services &gt; System Services Details &gt;
            check <em>Show location icon in menu bar</em>{' '}
          </p>
          <p>
            - Privacy &gt; Analytics &amp; Improvements &gt; deselect all
            options
          </p>
          <h3 className="my-3" id="keyboard">
            Keyboard
          </h3>
          <p> - Keyboard &gt; Key Repeat to Fast</p>
          <p> - Keyboard &gt; Delay until repeat to Short</p>

          <h3 className="my-3" id="trackpad">
            Trackpad
          </h3>
          <p> - Point &amp; Click &gt; Check Tap to click</p>
          <p> - Scroll &amp; Zoom &gt; Uncheck Scroll Direction: Natural</p>
          <h3 className="my-3" id="mouse">
            Mouse
          </h3>
          <p> - Uncheck Scroll direction: Natural</p>
          <p> - Tracking speed to Fast</p>
          <h3 className="my-3" id="sharing">
            Sharing
          </h3>
          <p> - Uncheck File Sharing (File Sharing should be Off)</p>
          <p> - In the terminal, change the computer name:</p>
          <code>sudo scutil --set ComputerName &quot;NEW_NAME_HERE&quot;</code>
          <br />
          <code>sudo scutil --set LocalHostName &quot;NEW_NAME_HERE&quot;</code>
          <br />
          <code>sudo scutil --set HostName &quot;NEW_NAME_HERE&quot;</code>
          <aside className="bg-gray-200">
            <span className="font-bold">Note:</span> Convention is to have a
            network name that will encompass a bunch of hosts tied to that
            name/org. So for example, a network name could be "westeros" and
            each computer/host would be a specific town like "winterfell" or
            "dorne". More professional networks use a combination of
            building/room/workstation names for computers.
          </aside>

          <h3 className="my-3" id="time-machine">
            Time Machine
          </h3>
          <p> - Select Backup Disk…</p>
          <p> - Check Back Up Automatically</p>
          {/* Insert amazon link to a hard drive here */}
          <h3 className="my-3" id="storage">
            Storage
          </h3>
          <p> - Apple Menu &gt; About this Mac &gt; Storage &gt; Manage</p>
          <p> - Remove Garage Band &amp; Sound Library</p>
          <p> - Remove iMovie</p>
        </div>

        <Link href="/#posts">
          <p className="underline cursor-pointer my-10">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default HowToSetUpYourMacForDevelopment2022;
