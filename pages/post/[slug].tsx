// import { useRouter } from 'next/router'
import DetailPost from '../../components/DetailPost'
import { GetStaticProps, GetStaticPaths } from 'next'
import { Post } from '../../interfaces'
import { fetchEntries } from '../../utils/contentfulPosts'

type Props = {
  item?: Post;
}

const StaticPropsDetail = ({ item }: Props) => {
  return (
    item && <DetailPost item={item} />
  )
}
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetchEntries()
  const posts = await res!.map((post) => {
    return post.fields
  })
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetchEntries()
  const slug = params?.slug
  const item = res!.find((post) => post.fields.slug === String(slug))
  return { props: { item } }
}
export default StaticPropsDetail

