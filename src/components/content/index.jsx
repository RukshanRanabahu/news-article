import article from "../../pages/dummy-data/article.json";
import he from 'he';
import { Image } from "@nextui-org/image";
import { Button, Link, Input } from "@nextui-org/react";
import { BookmarkIcon } from '../../icons/bookmark';
import { TelegramIcon } from '../../icons/telegram';
import { FacebookIcon } from '../../icons/facebook';
import { LinkedinIcon } from '../../icons/linkedin';

export default function Content() {
    const {
        title: articleTitle,
        image,
        byline_detail,
        publishdate,
        lastupdated,
        content,
        topics
    } = article;

    const byline = byline_detail[0];
    const textContent = content.find(item => item.bundle === 'text');
    const newsletterContent = content.find(item => item.bundle === 'newsletter_subscription');
    const spotlightContent = content.find(item => item.bundle === 'spotlight');

    const formatDate = (dateString) => new Intl.DateTimeFormat('en-US', {
        month: 'long', day: 'numeric', year: 'numeric'
    }).format(new Date(dateString));

    const renderRelatedTopics = () => (
        <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#4a4f54' }}>Related topics</h2>
            {topics.map((item, index) => (
                <Link href={`https://www.todayonline.com/${item?.link}`} target="_blank" key={index}>
                    <Button className="mr-4" color="default" variant="bordered">{item.name}</Button>
                </Link>
            ))}
        </div>
    );

    return (
        <div className="px-10">
            <h1 className="text-4xl font-bold">{he.decode(articleTitle)}</h1>

            <section className="flex flex-row mt-4">
                <div className="w-3/5">
                    <Image
                        className="mt-4 rounded-none"
                        alt={image?.description}
                        src={image?.media_image}
                    />
                    <div className="flex mt-4 text-base" dangerouslySetInnerHTML={{ __html: he.decode(image?.description) }} />
                </div>
                <div className="ml-8">
                    <div className="flex items-center space-x-4">
                        <Image className="rounded-full" height={50} width={50} alt="thumbnail" src={byline?.hero_media?.thumbnail} />
                        <div>
                            <span className="italic">By</span> <span className="font-bold">{byline?.title}</span>
                        </div>
                    </div>
                    <div className="mt-2 space-y-2">
                        <div><span className="italic">Published</span> <span className="font-bold">{formatDate(publishdate)}</span></div>
                        <div><span className="italic">Updated</span> <span className="font-bold">{formatDate(lastupdated)}</span></div>
                        <div className="flex space-x-2 font-bold">
                            <BookmarkIcon />
                            <TelegramIcon />
                            <FacebookIcon />
                            <LinkedinIcon />
                        </div>
                    </div>
                </div>
            </section>

            {textContent && (
                <article className="article-content w-[800px] mt-4 text-lg" dangerouslySetInnerHTML={{ __html: he.decode(textContent.body) }} />
            )}

            {renderRelatedTopics()}

            <div className="w-[800px] border-t my-8"></div>

            <section className="mb-8">
                <a href="https://www.todayonline.com/news" className="no-underline">
                    <div className="flex justify-between items-center bg-gray-100 p-4 max-w-[800px]">
                        <span className="font-bold">Read more of the latest in <span className="text-2xl ml-1" style={{ color: '#d22d28' }}> News</span></span>
                        <span className="text-sm" style={{ color: '#d22d28' }}>EXPLORE NOW &gt;</span>
                    </div>
                </a>
            </section>

            <section className="flex flex-row space-x-4">
                <div className="flex flex-col w-[400px] border">
                    <div className="bg-red-700 text-white text-2xl font-bold p-4">{newsletterContent?.title}</div>
                    <div className="flex justify-between p-4">
                        <div className="w-[200px] font-bold text-md" dangerouslySetInnerHTML={{ __html: he.decode(newsletterContent?.body) }} />
                        <Image height={150} alt="thumbnail" src={newsletterContent?.newsletter_image} />
                    </div>
                    <div className="flex">
                        <Input type="email" variant="underlined" placeholder="Enter your email" />
                        <Button className="px-8" style={{ backgroundColor: '#d22d28', color: 'white' }}>SUBSCRIBE &gt;</Button>
                    </div>
                    <div className="text-sm p-4">{newsletterContent?.sub_description}</div>
                </div>
                {spotlightContent && (
                    <Image className="rounded-none" height={400} alt="thumbnail" src={spotlightContent.hero_media?.thumbnail} />
                )}
            </section>
        </div>
    );
}
