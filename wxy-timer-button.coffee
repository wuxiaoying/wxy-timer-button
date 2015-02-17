Polymer
  raised: true
  z: 3

  eventDelegates:
    tap: 'onTap'

  attached: ->
    @width = @clientWidth
    @radius = @width / 2 - 5
    @center = @width / 2
    return

  onTap: ->
    if @raised
      @raised = false
      @$.shadow.setZ 0

    @fire 'start'
    @_StartTimer()
    return

  addTime: ->
    @time += 15
    return

  subtractTime: ->
    @time -= 15
    return

  reset: ->
    @raised = true
    @$.shadow.setZ 3
    return

  _StartTimer: ->
    if @time > 0
      @job 'time', ->
        @time--
        @_StartTimer()
        return
      , 1000
    else
      @fire 'complete'

    return
