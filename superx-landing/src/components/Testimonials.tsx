import React from 'react'

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      amount: '₹2,450',
      text: 'I made ₹2,450 last month just by using superX for my daily expenses. The cashback is instant and real!',
      avatar: '👩‍💼',
    },
    {
      name: 'Rahul Verma',
      location: 'Bangalore',
      amount: '₹8,120',
      text: 'The super Jackpot actually works! Won a ₹5000 flight ticket. My friends dont believe me but its real.',
      avatar: '👨‍💻',
    },
    {
      name: 'Ananya Iyer',
      location: 'Chennai',
      amount: '₹1,890',
      text: 'Finally an app that doesnt play games with cashback. What you see is what you get. Love the transparency!',
      avatar: '👩‍🎓',
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-8">
          Loved by{' '}
          <span className="gradient-text">lakhs</span>
          {' '}of Indians
        </h2>
        <p className="text-xl text-ink/60 text-center max-w-2xl mx-auto mb-16">
          Dont take our word for it. Here's what real users say.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div 
              key={i}
              className="glass rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-ink/60">{testimonial.location}</p>
                </div>
              </div>
              
              <p className="text-ink/70 mb-6 leading-relaxed">"{testimonial.text}"</p>
              
              <div className="bg-primary/10 rounded-xl p-4">
                <p className="text-sm text-ink/60">Total earned</p>
                <p className="text-2xl font-bold text-primary">{testimonial.amount}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
