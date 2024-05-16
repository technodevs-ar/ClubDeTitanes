import banner3 from '../../assets/images/bannerMobileDesktop.png';
import bannerMobile from '../../assets/images/bannerMobile.png'
export const Banner = () => {
    return(
        <section className='h-auto flex justify-center items-center overflow-hidden'>
            <img src={banner3} className='h-full w-full max-w-none object-cover object-left hidden md:block' alt="Banner" />
            <img src={bannerMobile} className='md:hidden block'></img>
        </section>

    )
}