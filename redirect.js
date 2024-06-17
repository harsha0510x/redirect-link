echo "module.exports = (req, res) => {
    const userAgent = req.headers['user-agent'];

    if (/android/i.test(userAgent)) {
        res.writeHead(302, { Location: 'https://play.google.com/store/apps/details?id=com.appisoft.perkz&pcampaignid=web_share' });
    } else if (/iPad|iPhone|iPod/.test(userAgent)) {
        res.writeHead(302, { Location: 'https://apps.apple.com/us/app/iperkz/id1512501611' });
    } else {
        res.writeHead(302, { Location: 'https://www.iperkz.com/index.html' });
    }
    res.end();
};" > api/redirect.js
