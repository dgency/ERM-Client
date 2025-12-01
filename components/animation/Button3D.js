"use client"


const Button3D = ({children}) => {
	return (
		<div className="container hidden lg:block ">
			{children}
			<div className="button__bottom"></div>
			<div className="button__shadow"></div>
		</div>
	);
};


export default Button3D;
