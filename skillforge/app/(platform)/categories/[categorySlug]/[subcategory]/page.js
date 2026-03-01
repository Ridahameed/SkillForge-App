import styles from './subcategory.module.css';
export default async function pagesubcategory({params}) {
    const { categorySlug, subcategory } = await params;
  return (
    <div className={styles.subcategoryPage}>
        <h1 className={styles.subcategoryTitle}>{subcategory} in {categorySlug}</h1>
        <p>This is the {subcategory} subcategory page under the {categorySlug} category.</p>
        <div>
            <h3>Lesson Content</h3>
            <ul>
                <li>Introduction to {subcategory}</li>
                <li>Basics of {subcategory}</li>
                <li>Advanced {subcategory} Techniques</li>
            </ul>
        </div>

    </div>
  )
}
