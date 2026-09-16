import React from 'react'
import Logo from '../../components/Logo'
import { Link } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { postSignUp } from '../../services/authService'
import toast from 'react-hot-toast'
import PropTypes from 'prop-types'

export default function Pricing({data}) {

    const {isLoading, mutateAsync} = useMutation ({
        mutationFn: () => postSignUp(data)
    })

    const submitData = async () => {
        if (!data) {
            return
        }

        const loadingToast = toast.loading("Menyiapkan pembayaran...")

        try {
            const response = await mutateAsync()

            toast.success("Akun berhasil dibuat, mengalihkan ke pembayaran...", { id: loadingToast })

            window.location.replace(response.data.midtrans_payment_url)
        } catch (error) {
            // Sebelumnya error ditelan tanpa pesan → user hanya melihat "tidak terjadi apa-apa".
            const message =
                error?.response?.data?.details?.[0] ||
                error?.response?.data?.message ||
                "Gagal mendaftar. Silakan coba lagi."

            toast.error(message, { id: loadingToast })
            console.log(error)
        }
    }

  return (
   <div className="relative flex flex-col flex-1 p-[10px]">
        <div className="absolute w-[calc(100%-20px)] min-h-[calc(100vh-20px)] h-[calc(100%-20px)] bg-[#fffaf0] -z-10 rounded-[20px]">
            <img src="/assets/images/backgrounds/background-glow.png" className="absolute bottom-0 transform -translate-x-1/2 left-1/2 opacity-60" alt=""/>
        </div>
        <nav className="flex items-center justify-between p-[30px]">
           <Logo/>
            <div className="flex items-center gap-3">
                <Link to="/manager/sign-in" >
                    <div className="flex items-center gap-3 w-fit rounded-full p-[14px_20px] transition-all duration-300 bg-[#0a0a0a] border border-[#0a0a0a] hover:bg-[#1f1f1f]">
                        <span className="font-semibold text-white">Sign In</span>
                    </div>
                </Link>
            </div>
        </nav>
        <header className="flex flex-col items-center gap-5 text-center mt-[50px]">
            <h1 className="font-extrabold text-[46px] leading-[50px] tracking-[-1px] text-[#0a0a0a]">Best Pricing For Everyone<br/>Who Wants to Grow Business</h1>
            <p className="text-lg leading-[27px] text-[#6a6a6a]">We delivery robust features to anyone unconditionally.</p>
        </header>
        <div className="flex justify-center max-w-[440px] mx-auto mt-[60px]">
            <div className="card flex flex-col h-fit w-full rounded-3xl border border-[#e5e5e5] p-[32px] gap-[30px] bg-[#1a3a3a]">
                <img src="/assets/images/icons/note-favorite-white.svg" className="w-[60px] h-[60px]" alt="icon"/>
                <div>
                    <p className="font-extrabold text-[46px] leading-[69px] text-white">Rp 200.000</p>
                    <p className="text-[#a0a0a0] mt-[6px]">Sekali bayar — akses selamanya</p>
                </div>
                <hr className="border-[#e5e5e5]"/>
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-[6px]">
                        <img src="/assets/images/icons/tick-circle-white.svg" className="flex shrink-0 w-6 h-6" alt="icon"/>
                        <p className="font-semibold text-white">Access gigantic features company</p>
                    </div>
                    <div className="flex items-center gap-[6px]">
                        <img src="/assets/images/icons/tick-circle-white.svg" className="flex shrink-0 w-6 h-6" alt="icon"/>
                        <p className="font-semibold text-white">Students analytics and export</p>
                    </div>
                    <div className="flex items-center gap-[6px]">
                        <img src="/assets/images/icons/tick-circle-white.svg" className="flex shrink-0 w-6 h-6" alt="icon"/>
                        <p className="font-semibold text-white">Life support 24/7 maintenances</p>
                    </div>
                    <div className="flex items-center gap-[6px]">
                        <img src="/assets/images/icons/tick-circle-white.svg" className="flex shrink-0 w-6 h-6" alt="icon"/>
                        <p className="font-semibold text-white">Export and analyze data real time</p>
                    </div>
                    <div className="flex items-center gap-[6px]">
                        <img src="/assets/images/icons/tick-circle-white.svg" className="flex shrink-0 w-6 h-6" alt="icon"/>
                        <p className="font-semibold text-white">More big features coming soon</p>
                    </div>
                </div>
                <hr className="border-[#e5e5e5]"/>
                <div className="flex flex-col gap-3">
                    <button type='button' onClick={submitData} disabled={isLoading} >
                        <div className="flex items-center justify-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#0a0a0a] hover:border-[#0a0a0a] hover:shadow-[-10px_-6px_10px_0_#0a0a0a_inset] bg-[#0a0a0a] border-[#0a0a0a] shadow-[-10px_-6px_10px_0_#0a0a0a_inset]">
                            <span className="font-semibold text-white">Choose This Plan</span>
                        </div>
                    </button>
                    <Link to="#" >
                        <div className="flex items-center justify-center gap-3 w-full rounded-full p-[14px_20px] transition-all duration-300 bg-[#fffaf0] border border-[#fffaf0] hover:opacity-90">
                            <span className="font-semibold text-[#0a0a0a]">Contact Our Sales</span>
                        </div>
                    </Link>  
                </div>
            </div>
        </div>
    </div>
  )
}

Pricing.PropTypes = {
    data: PropTypes.object
}