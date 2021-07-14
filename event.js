const events = {
  click:
  {
      unorderedlist(e)
      {
          if (e.target.nodeName !== 'A') return

          const A = e.target
          Array.prototype.forEach.call(this.children, function(LI)
          {
              LI.classList.remove('active')
              LI.children[0].classList.remove('text-reset')
              if (LI === A.parentNode && A.href !== '#')
              {
                  e.preventDefault()
                  LI.classList.add('active')
                  A.classList.add('text-reset')
                  player.src(
                  {
                      type: 'application/x-mpegURL',
                      src: A.href
                  })
                  player.play()
              }
          })
      },

      playbackRate(e)
      {
          video.playbackRate = document.getElementById('speed').value
      },
      reset(e)
      {
          video.playbackRate = 1.5
          document.getElementById('speed').value = 1.5
      },

      back()
      {
          video.currentTime -= +current.value
      },
      forward()
      {
          video.currentTime += +current.value
      },

  }
}

for (const event in events)
{
  for (const [id, handler] of Object.entries(events[event]))
  {
      document.getElementById(id).addEventListener(event, handler)
  }
}