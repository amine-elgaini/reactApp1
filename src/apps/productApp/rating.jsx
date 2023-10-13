export default function Rating({rating}) {
    return(
        <>
            <span style={{whiteSpace: 'nowrap'}} className="p-1 bg-primary rounded-3">
                {rating.rate}count : {rating.count}
            </span>
        </>
    )
}
