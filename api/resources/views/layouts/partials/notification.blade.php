<div class="container">
    @if(Session::has('error'))
        <div class="alert alert-danger">
            {{ Session::get('error') }}
        </div>
    @elseif(Session::has('warning'))
        <div class="alert alert-warning">
            {{ Session::get('warning') }}
        </div>
    @elseif(Session::has('success'))
        <div class="alert alert-success">
            {{ Session::get('success') }}
        </div>
    @elseif(Session::has('info'))
        <div class="alert alert-info">
            {{ Session::get('info') }}
        </div>
    @endif
</div>