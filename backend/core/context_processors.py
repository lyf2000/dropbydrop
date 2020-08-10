import os 

def export_vars(request):
    data = {}
    data['VUE_APP_HOST'] = os.getenv('VUE_APP_HOST')
    return data
