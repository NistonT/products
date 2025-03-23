export const Modal = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div className='fixed inset-0 bg-white flex justify-center items-center z-50'>
			<div className='bg-white p-6 rounded-lg shadow-lg max-w-lg w-full'>
				<h2 className='text-xl font-bold mb-4'>Редактировать товар</h2>
				{children}
			</div>
		</div>
	);
};
