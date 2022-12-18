// import { useState } from "react"
import { NavLink } from "react-router-dom"
import { HomeIcon, TableCellsIcon } from '@heroicons/react/20/solid'
import React from "react"

const Layout = ({ children }: { children: React.ReactNode }) => {
  // const [search, setSearch] = useState('');
  return (
    <div className="min-vh-100 min-vw-100 bg-[#191919] d-flex text-[#E1E1E1]">

      {/* sidebar */}
      <nav className="navbar navbar-expand flex-column align-items-start bg-black w-80 min-vh-100 px-8">
        <div className="container-fluid flex-column align-items-start">
          <a className="navbar-brand text-red-500 fs-1 font-semibold" href="#">Filmku</a>
          <div className="navbar flex-column justify-content-start align-items-start w-100" id="navbarSupportedContent">
            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
            <div className="navbar-nav my-2 flex-column justify-content-start align-items-start w-100">
              <li className="nav-item text-left w-100">
                <NavLink
                  to={"/"}
                  className={({ isActive }) => isActive ?
                    'nav-link rounded-lg text-[#E1E1E1] d-flex w-100 justify-content-start align-items-center bg-[#1F1F1F]' :
                    'nav-link rounded-lg text-[#E1E1E1] d-flex w-100 justify-content-start align-items-center'
                  }
                >
                  <HomeIcon className="w-5 h-5 me-3" /> Galeri</NavLink>
              </li>
              <li className="nav-item text-left w-100">
                <NavLink
                  to={"/category"}
                  className={({ isActive }) => isActive ?
                    'nav-link rounded-lg text-[#E1E1E1] d-flex w-100 justify-content-start align-items-center bg-[#1F1F1F]' :
                    'nav-link rounded-lg text-[#E1E1E1] d-flex w-100 justify-content-start align-items-center'
                  }
                >
                  <TableCellsIcon className="w-5 h-5 me-3" /> Kategori</NavLink>
              </li>
            </div>
          </div>
        </div>
      </nav>
      <div className="w-100 min-vh-100 px-12 py-4">
        {children}
      </div>

    </div>
  )
}

export default Layout