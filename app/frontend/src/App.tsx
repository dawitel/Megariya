import { Route, Routes } from 'react-router-dom'
import './globals.css'
import SignInForm from './_auth/froms/SignInForm'
import {Home} from './_root/pages'
import SignUpForm from './_auth/froms/SignUpForm'
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'
import { Toaster } from "@/components/ui/toaster";

const App = () => {
  return (
    <main className='flex h-screen'>
        <Routes>
            {/* PUBLIC ROUTES */}
                <Route element={<AuthLayout />}>
                    <Route path='/sign-in' element={<SignInForm />}/>
                    <Route path='/sign-up' element={<SignUpForm />}/>
                </Route>
            {/* PUBLIC ROUTES */}

            {/* PRIVATE ROUTES */}
                <Route element={<RootLayout />}>
                    <Route index element={<Home />}/>
                </Route>
            {/* PRIVATE ROUTES */}
            
        </Routes>
        <Toaster />
    </main>
  )
}

export default App