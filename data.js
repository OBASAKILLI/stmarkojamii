const siteData = {
    "default": {
        title: "Information Coming Soon",
        heroImage: "./assets/images/hero-bg.png",
        content: `
            <div class="page-content-wrapper">
                <p class="lead-text">We are currently updating this section of our website to better serve you.</p>
                <p>Please check back soon for more detailed information. If you have immediate questions, please contact the parish office at <strong>+254 712 345 678</strong> or email us at <strong>office@stmarkojamii.co.ke</strong>.</p>
                <a href="index.html" class="btn btn-primary" style="margin-top: 2rem;">Return to Homepage</a>
            </div>
        `
    },
    // Get To Know Us
    "contact": {
        title: "Contact Us",
        heroImage: "./assets/images/church_drone_shot.png",
        content: `
            <div class="page-content-wrapper">
                <h2>Parish Office</h2>
                <p><strong>Address:</strong> P.O. Box 123, Busia Town, Kenya (Near Busia County Referral Hospital)</p>
                <p><strong>Phone:</strong> +254 712 345 678</p>
                <p><strong>Email:</strong> office@stmarkojamii.co.ke</p>
                <h3>Office Hours</h3>
                <p>Monday - Friday: 8:00 AM - 4:30 PM</p>
                <p>Saturday: 9:00 AM - 12:00 PM</p>
                <div style="margin-top: 2rem;">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1d15955.0321584988!2d34.1118671!3d0.460835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177f95083f2e6933%3A0xc3f1a0e8d0e8e0e8!2sBusia%2C%20Kenya!5e0!3m2!1sen!2ske!4v1715780000000!5m2!1sen!2ske" width="100%" height="450" style="border:0; border-radius: 8px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        `
    },
    "history": {
        title: "Our History",
        content: `
            <div class="page-content-wrapper">
                <h2>A Legacy of Faith in Western Kenya</h2>
                <p>Founded in the early 20th century by the Mill Hill Missionaries, St. Mark o Jamii has been a cornerstone of faith and community in Busia for decades. Our parish name "o Jamii" reflects our deep commitment to being "of the community," serving as a beacon of hope and unity for all residents of Busia County.</p>
            </div>
        `
    },
    "staff": {
        title: "Parish Staff",
        content: `
            <div class="page-content-wrapper">
                <h2>Meet Our Pastoral Team</h2>
                <div class="staff-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 2rem; margin-top: 2rem;">
                    <div class="staff-card" style="text-align: center; border: 1px solid #eee; padding: 2rem; border-radius: 8px;">
                        <div style="width: 120px; height: 120px; border-radius: 50%; background-color: #ddd; margin: 0 auto 1rem;"></div>
                        <h3 style="color: var(--primary-blue); margin-bottom: 0.5rem;">Rev. Fr. John Okello</h3>
                        <p style="color: #555; font-weight: bold;">Parish Priest</p>
                    </div>
                    <div class="staff-card" style="text-align: center; border: 1px solid #eee; padding: 2rem; border-radius: 8px;">
                        <div style="width: 120px; height: 120px; border-radius: 50%; background-color: #ddd; margin: 0 auto 1rem;"></div>
                        <h3 style="color: var(--primary-blue); margin-bottom: 0.5rem;">Rev. Fr. Peter Wambua</h3>
                        <p style="color: #555; font-weight: bold;">Assistant Priest</p>
                    </div>
                    <div class="staff-card" style="text-align: center; border: 1px solid #eee; padding: 2rem; border-radius: 8px;">
                        <div style="width: 120px; height: 120px; border-radius: 50%; background-color: #ddd; margin: 0 auto 1rem;"></div>
                        <h3 style="color: var(--primary-blue); margin-bottom: 0.5rem;">Mr. James Wafula</h3>
                        <p style="color: #555; font-weight: bold;">Catechist</p>
                    </div>
                </div>
            </div>
        `
    },
    // Sacraments
    "baptism": {
        title: "Sacrament of Baptism",
        heroImage: "./assets/images/ministry.png",
        content: `
            <div class="page-content-wrapper">
                <p class="lead-text">"Holy Baptism is the basis of the whole Christian life, the gateway to life in the Spirit, and the door which gives access to the other sacraments." - CCC 1213</p>
                <h2>Infant Baptism</h2>
                <p>Welcome your child into the Catholic faith! To schedule a baptism, parents must be registered members of the parish.</p>
                <h3>Preparation & Scheduling</h3>
                <ul>
                    <li><strong>Prep Class:</strong> Required for parents and godparents.</li>
                    <li><strong>Baptism Schedule:</strong> Held on the second and fourth Sunday of every month at 2:00 PM.</li>
                    <li><strong>Godparents:</strong> Must be confirmed and practicing Catholics in good standing with their respective Small Christian Communities (SCCs).</li>
                </ul>
            </div>
        `
    },
    "weddings": {
        title: "Sacrament of Holy Matrimony",
        content: `
            <div class="page-content-wrapper">
                <p class="lead-text">"The matrimonial covenant, by which a man and a woman establish between themselves a partnership of the whole of life, is by its nature ordered toward the good of the spouses and the procreation and education of offspring."</p>
                <h2>Wedding Preparation</h2>
                <p>A <strong>one-year preparation period</strong> is required for all couples. Please contact the parish office and meet with a priest before setting a firm wedding date.</p>
                <h3>Steps for Preparation</h3>
                <ul>
                    <li>Completion of a 6-month Marriage Prep course.</li>
                    <li>Meetings with the Parish Priest and mentor couples.</li>
                    <li>Canonical interview and submission of recent Baptismal Certificates.</li>
                    <li>Banns of Marriage must be published in the bulletin for 3 consecutive weeks.</li>
                </ul>
            </div>
        `
    },
    "anointing": {
        title: "Anointing of the Sick",
        content: `
            <div class="page-content-wrapper">
                <p class="lead-text">Through the Anointing of the Sick, Christ offers healing, strength, and peace to those facing serious illness, surgery, or the challenges of advanced age.</p>
                <p><strong>Eligibility:</strong> For those seriously ill, preparing for major surgery, or the elderly. There is no need to wait until the person is near death.</p>
                <p>Please contact the parish office to schedule a time for a priest to administer the sacrament.</p>
            </div>
        `
    },
    "reconciliation": {
        title: "Kitubio / Reconciliation",
        content: `
            <div class="page-content-wrapper">
                <h2>Ratiba ya Kitubio</h2>
                <p>Sakramenti ya Kitubio hutolewa kila Jumamosi na wakati wowote kwa maombi maalum.</p>
                <ul>
                    <li><strong>Saturday / Jumamosi:</strong> 3:00 PM - 4:30 PM</li>
                    <li><strong>Weekdays:</strong> After morning mass or by appointment.</li>
                </ul>
            </div>
        `
    },
    "ocia": {
        title: "OCIA (Order of Christian Initiation for Adults)",
        content: `
            <div class="page-content-wrapper">
                <h2>Journey of Faith</h2>
                <p>Formerly known as RCIA, OCIA is the process by which adults enter the Catholic Church. Whether you are unbaptized, baptized in another faith, or a baptized Catholic seeking Confirmation and Eucharist, we welcome you!</p>
                <div style="background: #f9f9f9; padding: 2rem; border-radius: 8px; margin-top: 2rem;">
                    <p><strong>Contact:</strong> Mr. Bill Otieno, Director of Adult Faith Formation</p>
                    <p><strong>Email:</strong> adultfaith@stmarkojamii.co.ke</p>
                    <p><strong>Phone:</strong> +254 733 444 555</p>
                </div>
            </div>
        `
    },
    // Chapels / Mega Menu items
    "boy-cub-scouts": {
        title: "Boy & Cub Scouts",
        content: `
            <div class="page-content-wrapper">
                <h2>Scouting at St. Mark o Jamii</h2>
                <p>Our parish proudly sponsors both Cub Scout and Boy Scout troops. Scouting provides young men with opportunities for character development, citizenship training, and personal fitness, all rooted in the values of our Catholic faith.</p>
            </div>
        `
    },
    "knights-of-columbus": {
        title: "Knights of Columbus",
        content: `
            <div class="page-content-wrapper">
                <h2>Charity, Unity, Fraternity, Patriotism</h2>
                <p>The Knights of Columbus is a global Catholic fraternal service order. Our local council is deeply involved in supporting the parish through pancake breakfasts, fish frys, and various charitable initiatives benefiting our community and the unborn.</p>
                <div style="background: #f9f9f9; padding: 2rem; border-radius: 8px; border-left: 4px solid var(--primary-blue);">
                    <p><strong>Grand Knight:</strong> Mr. Peter Ochieng</p>
                    <p><strong>Phone:</strong> +254 711 222 333</p>
                </div>
            </div>
        `
    },
    "youth-ministry": {
        title: "Youth Ministry",
        content: `
            <div class="page-content-wrapper">
                <h2>Leading Teens Closer to Christ</h2>
                <h3>High School Youth Group</h3>
                <p>Meets on <strong>Sundays from 5:30 PM – 7:30 PM</strong> in the Youth Room. Join us for prayer, games, food, and fellowship.</p>
                
                <h3>Middle School Youth Group (Edge)</h3>
                <p>Open to 7th and 8th graders. Meets on <strong>Wednesday nights from 6:15 PM – 7:30 PM</strong> in the Youth Room (Parish Service Center).</p>
                
                <p style="margin-top: 2rem;"><strong>Contact:</strong> James Omalla, Director of Youth Ministry (youth@stmarkojamii.co.ke)</p>
            </div>
        `
    },
    "eucharistic-adoration": {
        title: "Eucharistic Adoration",
        content: `
            <div class="page-content-wrapper">
                <h2>Perpetual Adoration Chapel</h2>
                <p>St. Mark o Jamii was one of the first parishes in the Archdiocese to offer Perpetual Adoration. All are welcome to spend time with our Lord in the Blessed Sacrament in our 24-hour Adoration Chapel.</p>
                <div style="text-align: center; margin: 2rem 0;">
                    <a href="#" class="btn btn-primary" style="background: var(--primary-blue); color: white;">Book Your Hour</a>
                </div>
                <p><strong>Note:</strong> We encourage all parishioners to sign up for an hour of prayer with the Blessed Sacrament.</p>
            </div>
        `
    },
    // Top Bar Links
    "capital-campaign": {
        title: "Capital Campaign",
        heroImage: "./assets/images/hero-bg.png",
        content: `
            <div class="page-content-wrapper">
                <h2>Building Our Future Together</h2>
                <p>We are excited to announce our upcoming Capital Campaign to renovate our sanctuary and expand our educational facilities. Your generous support ensures that our parish will continue to serve generations to come.</p>
                <div style="text-align: center; margin-top: 2rem;">
                    <a href="#" class="btn btn-primary" style="background-color: var(--primary-blue); color: white; padding: 1rem 2rem; border-radius: 5px; text-decoration: none;">Pledge Your Support</a>
                </div>
            </div>
        `
    },
    "reled": {
        title: "Religious Education (K-8)",
        content: `
            <div class="page-content-wrapper">
                <h2>Formation for Young Disciples</h2>
                <p>Our Religious Education program serves children in grades K-8 who attend non-Catholic schools. Our mission is to assist parents in the religious, moral, and spiritual formation of their children.</p>
                <div style="background: #f9f9f9; padding: 2rem; border-radius: 8px; margin-top: 2rem;">
                    <p><strong>Director:</strong> Sr. Mary Atieno</p>
                    <p><strong>Email:</strong> formation@stmarkojamii.co.ke</p>
                    <p><strong>Phone:</strong> +254 722 333 444</p>
                </div>
            </div>
        `
    },
    "school": {
        title: "St. Mark o Jamii Catholic School",
        heroImage: "./assets/images/school.png",
        content: `
            <div class="page-content-wrapper">
                <h2>Academic Excellence & Character Building</h2>
                <p>Our parish school is committed to providing quality education integrated with Catholic values. We fully implement the Kenyan <strong>Competency Based Curriculum (CBC)</strong>, ensuring our students are prepared for the modern world while nurturing their spiritual growth.</p>
                <ul>
                    <li>Dedicated and CBC-trained teachers</li>
                    <li>Strong focus on discipline, integrity, and prayer</li>
                    <li>Active participation in Drama, Music, and Sports festivals</li>
                    <li>Spiritual guidance through regular school Masses</li>
                </ul>
                <p>For admissions inquiries, please contact the school office.</p>
            </div>
        `
    },
    "eec": {
        title: "Early Education Center",
        heroImage: "./assets/images/church_drone_shot.png",
        content: `
            <div class="page-content-wrapper">
                <h2>Nurturing Young Hearts & Minds</h2>
                <p>The St. Mark o Jamii Early Education Center (EEC) offers a safe, nurturing, and faith-filled environment for your youngest children. Our programs focus on social, emotional, and cognitive development.</p>
                <ul>
                    <li>Full-day and part-day options</li>
                    <li>Preschool and childcare</li>
                </ul>
            </div>
        `
    },
    // Hero Sidebar Links
    "mass-times": {
        title: "Mass Times",
        heroImage: "./assets/images/hero-bg.png",
        content: `
            <div class="page-content-wrapper">
                <h2>Weekend Liturgy Schedule</h2>
                <p><strong>Saturday Vigil:</strong> 5:00 PM</p>
                <p><strong>Sunday:</strong> 7:30 AM, 9:00 AM, 10:30 AM, 12:00 PM</p>
                
                <h2 style="margin-top: 2rem;">Weekday Liturgy Schedule</h2>
                <p><strong>Monday - Friday:</strong> 6:25 AM and 8:15 AM</p>
                <p><strong>Saturday:</strong> 8:15 AM</p>
            </div>
        `
    },
    "bulletin": {
        title: "Weekly Bulletin",
        content: `
            <div class="page-content-wrapper">
                <h2>Stay Informed</h2>
                <p>Read our latest weekly bulletin (May 17, 2026) to stay up-to-date with parish news, upcoming events, and liturgical schedules.</p>
                <div style="margin-top: 2rem; padding: 2rem; border: 1px solid #ccc; border-radius: 8px; text-align: center;">
                    <i class="fas fa-file-pdf" style="font-size: 3rem; color: #d32f2f; margin-bottom: 1rem;"></i>
                    <h3>Current Bulletin</h3>
                    <p>May 17, 2026</p>
                    <a href="https://church.stmarkojamii.co.ke/news/bulletin" target="_blank" class="btn btn-primary">View Bulletin Archive</a>
                </div>
            </div>
        `
    },
    "donate": {
        title: "Kutoa Sadaka / Tithe",
        content: `
            <div class="page-content-wrapper">
                <h2>Support Our Parish Mission</h2>
                <p>Tunakushukuru kwa ukarimu wako katika kusaidia kazi ya Mungu hapa Busia. Your contributions support our ministries, outreach programs, and the maintenance of our parish home.</p>
                
                <div style="background: #f9f9f9; padding: 2rem; border-radius: 8px; border-left: 5px solid #28a745; margin: 2rem 0; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                    <div style="display: flex; align-items: center; margin-bottom: 1.5rem;">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/M-PESA_LOGO-01.svg/512px-M-PESA_LOGO-01.svg.png" alt="M-Pesa" style="height: 40px; margin-right: 1rem;">
                        <h3 style="margin: 0; color: #28a745;">Giving via M-Pesa</h3>
                    </div>
                    <p style="font-size: 1.1rem; margin-bottom: 0.5rem;"><strong>Paybill Number:</strong> <span style="font-family: monospace; font-size: 1.4rem; color: #333;">400222</span> (Equity Bank)</p>
                    <p style="font-size: 1.1rem; margin-bottom: 0.5rem;"><strong>Account Number:</strong> <span style="font-family: monospace; font-size: 1.4rem; color: #333;">123456#STMARK</span></p>
                    <p style="font-size: 1.1rem;"><strong>Account Name:</strong> ST MARK O JAMII BUSIA</p>
                </div>

                <div style="text-align: center; margin-top: 2rem;">
                    <p>For international giving or bank transfers, please contact the parish office.</p>
                </div>
            </div>
        `
    },
    "watch-live": {
        title: "Live Stream",
        heroImage: "./assets/images/church_drone_shot.png",
        content: `
            <div class="page-content-wrapper">
                <h2>Worship With Us From Home</h2>
                <p>Join us for our live-streamed liturgies. We stream daily and weekend Masses for those who are unable to join us in person.</p>
                <div style="background-color: #f9f9f9; padding: 2rem; border-radius: 8px; border-left: 4px solid var(--accent-gold); margin: 2rem 0;">
                    <h3>Live Stream Schedule</h3>
                    <p><strong>Daily Mass:</strong> Monday - Saturday at 8:15 AM</p>
                    <p><strong>Sunday Mass:</strong> 9:00 AM</p>
                </div>
                <div style="text-align: center; margin-top: 2rem;">
                    <a href="https://church.stmarkojamii.co.ke/news/watch-live" target="_blank" class="btn btn-primary" style="background: var(--primary-blue); color: white;">Go to Live Stream Page</a>
                </div>
            </div>
        `
    },
    "update-info": {
        title: "Update Parishioner Information",
        content: `
            <div class="page-content-wrapper">
                <h2>Keep Your Record Current</h2>
                <p>Have you recently moved, changed your phone number, or welcomed a new child to your family? Please fill out the form below so we can keep our parish records up to date.</p>
                <form style="display: flex; flex-direction: column; gap: 1rem; max-width: 500px; margin-top: 2rem;">
                    <input type="text" placeholder="Full Name" style="padding: 0.8rem; border: 1px solid #ccc; border-radius: 4px;">
                    <input type="email" placeholder="Email Address" style="padding: 0.8rem; border: 1px solid #ccc; border-radius: 4px;">
                    <input type="tel" placeholder="Phone Number" style="padding: 0.8rem; border: 1px solid #ccc; border-radius: 4px;">
                    <textarea placeholder="What information needs updating?" rows="4" style="padding: 0.8rem; border: 1px solid #ccc; border-radius: 4px;"></textarea>
                    <button type="button" class="btn btn-primary" style="background: var(--primary-red); color: white; border: none; padding: 1rem; cursor: pointer;">Submit Update</button>
                </form>
            </div>
        `
    },
    "new-parishioner": {
        title: "Welcome New Parishioners!",
        content: `
            <div class="page-content-wrapper">
                <h2>Join Our Parish Family</h2>
                <p>Welcome to St. Mark o Jamii Catholic Church! We are delighted that you have chosen to make our parish your spiritual home. Please complete the new parishioner registration process so we can properly welcome you and connect you with our ministries.</p>
                <p>You may register online or stop by the parish office during regular business hours.</p>
                <div style="text-align: center; margin-top: 2rem;">
                    <button class="btn btn-primary" style="background: var(--primary-red); color: white; padding: 1rem 2rem; border: none; border-radius: 5px; cursor: pointer; font-size: 1.1rem;">Register Online</button>
                </div>
            </div>
        `
    },
    "archdiocese": {
        title: "Catholic Diocese of Bungoma",
        content: `
            <div class="page-content-wrapper">
                <h2>Serving the People of God in Bungoma and Busia</h2>
                <p>St. Mark o Jamii is proud to be a part of the Catholic Diocese of Bungoma. Under the leadership of our Bishop, we work together to spread the Gospel and serve the community across our region.</p>
                <div style="background: #f9f9f9; padding: 2rem; border-radius: 8px; margin-top: 2rem;">
                    <p><strong>Diocesan Office:</strong> Bungoma Town</p>
                    <p><strong>Website:</strong> <a href="https://www.bungomadiocese.org" target="_blank">www.bungomadiocese.org</a></p>
                </div>
            </div>
        `
    },
    "kccb": {
        title: "Kenya Conference of Catholic Bishops",
        content: `
            <div class="page-content-wrapper">
                <h2>Unity in Faith and Service</h2>
                <p>The Kenya Conference of Catholic Bishops (KCCB) is the assembly of the Catholic Hierarchy in Kenya. It provides a platform for the bishops to exercise jointly certain pastoral functions for the Christian faithful in Kenya.</p>
                <div style="background: #f9f9f9; padding: 2rem; border-radius: 8px; margin-top: 2rem;">
                    <p><strong>Location:</strong> Waumini House, Westlands, Nairobi</p>
                    <p><strong>Website:</strong> <a href="https://www.kccb.or.ke" target="_blank">www.kccb.or.ke</a></p>
                </div>
            </div>
        `
    },
    "cwa": {
        title: "Catholic Women Association (CWA)",
        heroImage: "./assets/images/ministry.png",
        content: `
            <div class="page-content-wrapper">
                <h2>Strong in Faith, Generous in Service</h2>
                <p>The CWA is a vibrant group of Catholic women dedicated to deepening their faith and serving the parish and the wider community of Busia. Our motto is "Strong in Faith, Generous in Service."</p>
                <div style="background: #f9f9f9; padding: 2rem; border-radius: 8px; margin-top: 2rem; border-left: 5px solid #003366;">
                    <p><strong>Meetings:</strong> Third Sunday of every month after the 9:00 AM Mass.</p>
                    <p><strong>Activities:</strong> Hospital visits, supporting the elderly, and parish fundraising.</p>
                </div>
            </div>
        `
    },
    "cma": {
        title: "Catholic Men Association (CMA)",
        heroImage: "./assets/images/ministry.png",
        content: `
            <div class="page-content-wrapper">
                <h2>Good Family, Good Church, Good Society</h2>
                <p>The CMA brings together Catholic men to promote their spiritual growth and active participation in the mission of the Church. We strive to be role models in our families and the community.</p>
                <div style="background: #f9f9f9; padding: 2rem; border-radius: 8px; margin-top: 2rem; border-left: 5px solid #d32f2f;">
                    <p><strong>Meetings:</strong> First Saturday of every month at 4:30 PM.</p>
                    <p><strong>Motto:</strong> Good Family, Good Church, Good Society.</p>
                </div>
            </div>
        `
    },
    "pmc": {
        title: "Pontifical Missionary Childhood (PMC)",
        heroImage: "./assets/images/school.png",
        content: `
            <div class="page-content-wrapper">
                <h2>Children Helping Children</h2>
                <p>PMC is a worldwide organization of Catholic children who are dedicated to the mission of the Church through prayer and sacrifice. Our children learn to be "Missionaries" from a young age.</p>
                <div style="background: #f9f9f9; padding: 2rem; border-radius: 8px; margin-top: 2rem; border-left: 5px solid var(--accent-gold);">
                    <p><strong>Meetings:</strong> Every Saturday at 10:00 AM.</p>
                    <p><strong>Motto:</strong> Children Helping Children.</p>
                </div>
            </div>
        `
    },
    "catholic-charities": {
        title: "Catholic Charities Kenya",
        content: `
            <div class="page-content-wrapper">
                <h2>Love in Action</h2>
                <p>Catholic Charities Kenya (Caritas Kenya) is the development and social arm of the Kenya Conference of Catholic Bishops. We are dedicated to serving the poor and vulnerable in our society through various programs including food security, health, and emergency response.</p>
                <div style="background: #f9f9f9; padding: 2rem; border-radius: 8px; margin-top: 2rem;">
                    <p><strong>Learn more:</strong> <a href="https://www.caritaskenya.org" target="_blank">www.caritaskenya.org</a></p>
                </div>
            </div>
        `
    }
};

// Function to format the ID back into a Title if not found in DB
function formatTitleFromId(id) {
    if (!id) return "Information Coming Soon";
    return id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
