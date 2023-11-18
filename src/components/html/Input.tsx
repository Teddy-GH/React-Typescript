type InputProps = React.ComponentProps<'input'>
// Wrap html elements and add custom props to the component
export const CustomInput = (props: InputProps) => {
    return <input {...props}/>
}