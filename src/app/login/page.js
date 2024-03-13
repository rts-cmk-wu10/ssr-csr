import Input from "@/components/input"
import Link from "next/link"

export default async function Login() {
	return (
		<form className="w-dvw mx-auto px-4 sm:w-1/2 md:w-1/3 lg:w-1/4">
			<h2 className="text-2xl">Log in</h2>
			<Input label="Username" name="username" type="text" />
			<Input label="Password" name="password" type="password" />
			<div className="flex justify-between mb-4">
				<Link href="/recover-password" className="text-xs underline whitespace-nowrap">I forgot my password</Link>
				<label className="whitespace-nowrap text-xs flex gap-1 item-center">
					<input type="checkbox" name="remember" />
					Remember me
				</label>
			</div>
			<button
				type="submit"
				className="bg-orange-500 px-4 py-2 rounded-md w-full uppercase font-bold"
			>
				Log in
			</button>

			<p className="text-center mt-5">No account? <Link href="/register" className="underline">Get a free one!</Link></p>

		</form>
	)
}