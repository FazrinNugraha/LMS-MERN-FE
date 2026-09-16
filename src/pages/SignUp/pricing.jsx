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
        <div className="absolute w-[calc(100%-20px)] min-h-[calc(100vh-20px)] h-[calc(100%-20px)] bg-[#060A23] -z-10 rounded-[20px]">
            <img src="/assets/images/backgrounds/background-glow.png" className="absolute bottom-0 transform -translate-x-1/2 left-1/2" alt=""/>
        </div>
        <nav className="flex items-center justify-between p-[30px]">
           <Logo/>
            <div className="flex items-center gap-3">
                <Link to="/manager/sign-in" >
                    <div className="flex items-center gap-3 w-fit rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#662FFF] border-[#8661EE] shadow-[-10px_-6px_10px_0_#7F33FF_inset]">
                        <span className="font-semibold text-white">Sign In</span>
                    </div>
                </Link>
            </div>
        </nav>
        <header className="flex flex-col items-center gap-5 text-center mt-[50px]">
            <h1 className="font-extrabold text-[46px] leading-[69px] text-white">Best Pricing For Everyone<br/>Who Wants to Grow Business</h1>
            <p className="text-lg leading-[27px] text-white">We delivery robust features to anyone unconditionally.</p>
        </header>
        <div className="flex justify-center max-w-[440px] mx-auto mt-[60px]">
            <div className="card flex flex-col h-fit w-full rounded-[20px] border border-[#262A56] p-[30px] gap-[30px] bg-[#080A2A]">
                <img src="/assets/images/icons/note-favorite-white.svg" className="w-[60px] h-[60px]" alt="icon"/>
                <div>
                    <p className="font-extrabold text-[46px] leading-[69px] text-white">Rp 200.000</p>
                    <p className="text-[#6B6C7F] mt-[6px]">Sekali bayar — akses selamanya</p>
                </div>
                <hr className="border-[#262A56]"/>
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
                <hr className="border-[#262A56]"/>
                <div className="flex flex-col gap-3">
                    <button type='button' onClick={submitData} disabled={isLoading} >
                        <div className="flex items-center justify-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#662FFF] border-[#8661EE] shadow-[-10px_-6px_10px_0_#7F33FF_inset]">
                            <span className="font-semibold text-white">Choose This Plan</span>
                        </div>
                    </button>
                    <Link to="#" >
                        <div className="flex items-center justify-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                            <span className="font-semibold text-white">Contact Our Sales</span>
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