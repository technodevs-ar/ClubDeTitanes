import banner3 from '../../assets/images/Banner.png';

export const Banner = () => {
    return(
        <section className='h-[500px] flex justify-center items-center overflow-hidden'>
            <img src={banner3} className='h-full w-full max-w-none object-cover object-left' alt="Banner" />
        </section>

    )
}