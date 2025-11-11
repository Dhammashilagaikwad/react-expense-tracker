import React from 'react'
import { Link } from 'react-router'

export default function Header() {
  return (
   <>
   <nav class="navbar navbar-expand-lg bg-body-tertiary pt-3 pb-2">
  <div class="container-fluid">
 
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/add-transaction">Add Transaction</Link>
        </li>
         
        <li class="nav-item">
          <Link class="nav-link" to="/budget-management">Budget Management</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/transaction-list">Summary & Transaction List</Link>
        </li>

      
      </ul>
    </div>
  </div>
</nav>
   </>
  )
}
