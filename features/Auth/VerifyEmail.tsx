import { useEffect, useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useAuthActions } from "./hooks/useAuth"
import { toast } from "react-toastify"

const VerifyEmail = () => {
    const searchParams = useSearchParams()
    const token = searchParams.get('token')
    const [isVerified, setIsVerified] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const { verifyToken } = useAuthActions()

    useEffect(() => {
        console.log("Token", token);
        const verifyEmailToken = async () => {
            if (token) {
                const res = await verifyToken(token)
                toast.success(res.data.message)
                setIsLoading(false)
                setIsVerified(true)
            }else{
                setIsLoading(false)
                setIsVerified(false)
            }
            setIsLoading(false)
        }
        verifyEmailToken()
    }, [])
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
    <div className="max-w-md w-full text-center bg-white p-8 rounded-xl shadow-lg">
      {isLoading && (
        <div className="space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <h2 className="text-2xl font-bold text-gray-800">Verifying your email...</h2>
          <p className="text-gray-600">Please wait while we confirm your account.</p>
        </div>
      )}

      {!isLoading && (
        <div className="space-y-4">
          <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-3xl">✓</div>
          <h2 className="text-2xl font-bold text-gray-800">Email Verified!</h2>
          <p className="text-gray-600">Your account is now active. You can proceed to your dashboard.</p>
          <Link href="/login" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Go to Login
          </Link>
        </div>
      )}

      {!isLoading && !isVerified && (
        <div className="space-y-4">
          <div className="bg-red-100 text-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-3xl">✕</div>
          <h2 className="text-2xl font-bold text-gray-800">Verification Failed</h2>
          <p className="text-gray-600">The link is invalid or has expired. Please request a new one.</p>
          <button className="text-blue-600 hover:underline font-medium">Resend Verification Email</button>
        </div>
      )}
    </div>
  </div>
  )
}

export default VerifyEmail